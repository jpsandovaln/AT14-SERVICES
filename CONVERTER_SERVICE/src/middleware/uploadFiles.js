const multer = require('multer');
const path = require('path');
const util = require('util');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, __dirname + '/resource');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const uploadFiles = multer({
    storage: storage,
}).single('file');

let uploadFilesMiddleware = util.promisify(uploadFiles);

module.exports = uploadFilesMiddleware;
