import path from "path";
import multer from "multer";
import fs from "fs";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, __dirname + "/../../public/images");
    },
    filename: function (req, file, cb) {
        const extension = path.extname(file.originalname);
        const name =
            Date.now() +
            path.basename(file.originalname, extension) +
            path.extname(file.originalname);
        cb(null, name);
    }
});

const upload = multer({
    storage: storage
});

module.exports = upload;
