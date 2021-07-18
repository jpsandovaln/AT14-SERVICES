const util = require("util");
const multer = require("multer");
const maxSize = 2000 * 1024 * 1024;

/*
class Upload{

  constructor(destinationPath = '/resources/static/assets/uploads/', maxSize = 200 * 1024 + 1024){

    this.storage = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, __basedir + destinationPath);
      },
      filename: (req, file, cb) => {
        console.log(file.originalname);
        cb(null, file.originalname);
      },
    });

    this.uploadFile = multer({
      storage: storage,
      limits: { fileSize: maxSize },
    }).single("file");

  
  }

  uploadFileMiddleware = util.promisify(this.uploadFile);
}*/
let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + "/resources/static/assets/uploads/");
  },
  filename: (req, file, cb) => {
    console.log(file.originalname);
    cb(null, file.originalname);
  },
});

let uploadFile = multer({
  storage: storage,
  limits: { fileSize: maxSize },
}).single("file");

let uploadFileMiddleware = util.promisify(uploadFile);

module.exports = uploadFileMiddleware;
