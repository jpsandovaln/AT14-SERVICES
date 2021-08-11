const util = require("util");
const multer = require("multer");
require("dotenv").config("../../.env");
const uploadPath = process.env.UPLOAD_PATH;

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        let fileType = file.mimetype.split("/")[1];
        cb(null, Date.now() + "." + fileType);
    },
});

let uploadFile = multer({
    storage: storage,
}).single("file");

let uploadFileMiddleware = util.promisify(uploadFile);

module.exports = uploadFileMiddleware;
