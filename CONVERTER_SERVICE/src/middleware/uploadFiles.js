const multer = require('multer');
const path = require('path');
const util = require('util');
const FileModel = require("../database/fileModel");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, __dirname + '/resource');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

let objectFile= null;
async function  fileFilter (req, file, cb) {
    objectFile= await FileModel.findOne({name: file.originalname});
    if(objectFile) {
       cb(null, false);
    }else{
        cb(null, true);
    }
}

const uploadFiles = multer({
    storage: storage,
    fileFilter: fileFilter
}).single('file');

const updateFile = async (req, res, next) => {
    await util.promisify(uploadFiles)(req, res);
    if(objectFile) {
        res.status(200).json({path: objectFile.path});
    }else{
        next();
    }   
}

module.exports = updateFile;
