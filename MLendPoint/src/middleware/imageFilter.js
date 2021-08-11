const path = require("path");
const multer = require("multer");
const fs = require('fs');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, __dirname + "/../../public/images");
    },
    filename: function (req, file, cb) {
        const extension = path.extname(file.originalname);
        const name = Date.now() + path.basename(file.originalname, extension) + path.extname(file.originalname);
        cb(null, name);
    },
});

const upload = multer({
    storage: storage,
});

module.exports = upload;
