const multer = require("multer");
const path = require("path");
const util = require("util");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, __dirname + "/resource");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const uploadImages = multer({
    storage: storage,
}).single("imageFile");

let uploadImagesMiddleware = util.promisify(uploadImages);

module.exports = uploadImagesMiddleware;