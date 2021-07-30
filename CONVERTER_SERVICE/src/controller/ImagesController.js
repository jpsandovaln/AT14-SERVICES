const baseUrl = "http://localhost:8080/";
const uploadImages = require("../middleware/uploadImages");
const fs = require("fs");

const getImage = (req, res) => {
  const directoryPath = __basedir;

  fs.readdir(directoryPath, function (err, files) {
      if (err) {
          res.status(500).send({
              message: "test failed"
          });
      }
      res.status(200).send("test");
  });
};

const upload = async (req, res) => {
    uploadImages(req, res);
   // upload.single('imageFile'), async (req, res)
/*
      if (req.file == undefined) {
          return res.status(400).send({ message: "Please upload a file!" });
      }
      if(req.file != undefined){
          return res.status(200).send({ message: "load successfull"});
      }
     
      uploadI(req, res => {
      });*/
      res.send({ message : "Hola"});

};

module.exports = {
  getImage,
  upload
};