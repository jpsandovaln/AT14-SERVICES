const path = require("path");
const multer = require("multer");

const fs = require('fs');
   
/*fs.mkdir(path.join(__dirname, 'test'), (err) => {
    if (err) {
        return console.error(err);
    }
    console.log('Directory created successfully!');
});*/

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, __dirname + "/../../public/images");
    },
    filename: function (req, file, cb) {
        const extension = path.extname(file.originalname);
        const name = Date.now() +path.basename(file.originalname,extension)+ path.extname(file.originalname);
        cb(null, name);        
    },
});

const upload = multer({
    storage: storage,/*
    limits: { fileSize: 20000000 },
    fileFilter: (req, file, cb) => {
        if (
            file.mimetype == "image/png" ||
            file.mimetype == "image/jpg" ||
            file.mimetype == "image/jpeg"
        ) {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
        }
    },*/
});


module.exports = upload;
