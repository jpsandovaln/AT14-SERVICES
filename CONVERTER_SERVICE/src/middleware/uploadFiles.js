const path = require("path");
const FileModel = require("../database/fileModel");
const formidable = require('formidable');
const FileUtil = require('../utilities/fileUtil');
const Md5File = require("../utilities/checksum");

require("dotenv").config();
const uploadPath = process.env.UPLOAD_PATH;

const updateFile = async (req, res, next) => {
    const form = formidable({ multiples: true });
 
    const result = await new Promise((resolve, reject) => {
        form.parse(req, (err, fields, files) => {
            resolve({ ...fields, files });
        });
    });

    req.fields = result;
    const hash = Md5File.getMD5File(result.files.file.path);
    const resulthash = hash;
    if(result.checksum===resulthash){
        const objectFile= await FileModel.findOne({checksum: result.checksum});
        if(objectFile) {
            req.fields.uploadpath = objectFile.path;
            req.fields.filename = objectFile.name;
            next();
        } else {
            req.fields.uploadpath = uploadPath + result.files.file.name;
            req.fields.filename = result.files.file.name;
            await FileUtil.copyFile(result.files.file.path, uploadPath, result.files.file.name);
            const fileModel = new FileModel({
                name: result.files.file.name,
                path: uploadPath + result.files.file.name,
                checksum: result.checksum,
            });
            fileModel.save(function (err, doc) {
                if (err) return console.error(err);
                console.log("Document inserted successfully!");
            });
            next();
        }
    } else {
        res.send([
            { message: "Invalid checksum, corrupt file" }
        ]);
    }
};

module.exports = updateFile;
