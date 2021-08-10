const path = require("path");
const FileModel = require("../database/fileModel");
const formidable = require('formidable');
const FileUtil = require('../utilities/fileUtil');

require("dotenv").config("../../.env");
const uploadPath = process.env.UPLOAD_PATH;

const updateFile = async (req, res, next) => {
    const form = formidable({ multiples: true });
 
    const result = await new Promise((resolve, reject) => {
        form.parse(req, (err, fields, files) => {
            resolve({ ...fields, files });
        });
    });

    req.fields = result;
    console.log(result);
    console.log(result.files);
    console.log(result.files.file);
    console.log(result.files.file.path);
    const objectFile= await FileModel.findOne({checksum: result.checksum});
    if(objectFile) {
        // get info from database
        req.fields.uploadpath = objectFile.path;
        req.fields.filename = objectFile.filename;
        next();
    } else {
        req.fields.uploadpath = uploadPath;
        req.fields.filename = result.files.file.name;
        FileUtil.copyFile(result.files.file.path, uploadPath, result.files.file.name);
        next();
    }
};

module.exports = updateFile;
