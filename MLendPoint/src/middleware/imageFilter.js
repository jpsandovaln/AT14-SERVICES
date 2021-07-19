const path      = require("path");
const multer    = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        //console.info(file)
        cb(null, '../public/images/');
    },
    filename: function (req, file, cb) {
        //console.info(file)
        cb(null, Date.now() + path.extname(file.originalname)) //Appending extension
    }
});

const upload = multer({ 
    storage: storage,
    limits: {fileSize: 20000000},
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
          cb(null, true);
        } else {
          cb(null, false);
          return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
      }    
}).single("imageFile");

module.exports = upload;
