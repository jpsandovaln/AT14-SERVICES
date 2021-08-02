const util = require("util");
const multer = require("multer");
const maxSize = 500000000 * 1024 * 1024;

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __basedir + "/resources/upload/");
    },
    filename: (req, file, cb) => {
        let fileType = file.mimetype.split("/")[1];
        cb(null, "video" + Date.now() + "." + fileType);
    }
});

let uploadFile = multer({
    storage: storage,
    limits: { fileSize: maxSize }
}).single("file");

let uploadFileMiddleware = util.promisify(uploadFile);

module.exports = uploadFileMiddleware;
