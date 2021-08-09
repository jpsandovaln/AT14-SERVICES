const multer = require("multer");
const path = require("path");
const util = require("util");
const FileModel = require("../database/fileModel");
const formidable = require('formidable');

require("dotenv").config("../../.env");
const uploadPath = process.env.UPLOAD_PATH;

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log('hello destination');
        cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

/*let objectFile = null;
async function fileFilter(req, file, cb) {
    objectFile = await FileModel.findOne({ checksum: req.body.checksum });
    console.log(objectFile);
    if (objectFile) {
        cb(null, false);
    } else {
        cb(null, true);
    }
}*/

const uploadFiles = multer({
    storage: storage,
    //fileFilter: fileFilter,
}).single("file");

const updateFile = async (req, res, next) => {
    const form = formidable({ multiples: true });
 
    await new Promise((resolve, reject) => {
        form.parse(req, async (err, fields, files) => {
            console.log(fields);
            const objectFile= await FileModel.findOne({checksum: fields.checksum});
            console.log(objectFile);
            if(objectFile) {
               // res.status(200).json({path: objectFile.path});
                const filePathDB= objectFile.path;
                next();
            } else {
                console.log('1');
                await util.promisify(uploadFiles);
                console.log('2');
               // console.log(req);
                next();
            }
        });
    });

/*const updateFile = async (req, res, next) => {
    await util.promisify(uploadFiles)(req, res);
    if (objectFile) {
        res.status(200).json({ path: objectFile.path });
    } else {
        next();
    }*/
};

module.exports = updateFile;