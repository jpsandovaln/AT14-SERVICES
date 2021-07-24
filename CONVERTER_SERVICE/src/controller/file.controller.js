const uploadFile = require("../middleware/upload");
const fs = require("fs");
const baseUrl = "http://localhost:8080/files/";

const BuildCmdChangeVideoFormat= require('../model/converter/video/buildCmdChangeVideoFormat');
const Compiler= require('../model/converter/compiler');
const path = require("path");
//const salida= require('../output/')

const output= path.resolve(__dirname,'output' );
const upload = async (req, res) => {
    try {
        await uploadFile(req, res);

        if (req.file == undefined) {
            return res.status(400).send({ message: "Please upload a file!" });
        }

        const video= new BuildCmdChangeVideoFormat();
        const compiler= new Compiler();
        const command= video.returnCommand('C:/Users/ryzyn/Desktop/ffmepg/ffmpeg.exe', 'C:/Users/ryzyn/Desktop/ffmepg/canto.mp4','D:/Prog101/AT14/AT14-SERVICES/CONVERTER_SERVICE/src/output/','2','320x240','30','.flv');
        console.info(command);
        const result= await compiler.execute(command);
        console.info(result);
        //res.send(result);
      
            /*console.log(command);
            res.status(200).send({
                name: req.file.originalname,
                url: baseUrl + req.file.originalname,
                params: req.body,
            })*/
        

       
    } catch (err) {
        console.log(err);

        if (err.code == "LIMIT_FILE_SIZE") {
            return res.status(500).send({
                message: "File size cannot be larger than 2MB!",
            });
        }

        res.status(500).send({
            message: `Could not upload the file: ${req.file.originalname}. ${err}`,
        });
    }
};

const getListFiles = (req, res) => {
    const directoryPath = __basedir + "/src/upload/";

    fs.readdir(directoryPath, function (err, files) {
        if (err) {
            res.status(500).send({
                message: "Unable to scan files!",
            });
        }

        let fileInfos = [];

        files.forEach((file) => {
            fileInfos.push({
                name: file,
                url: baseUrl + file,
            });
        });

        res.status(200).send(fileInfos);
    });
};

const download = (req, res) => {
    const fileName = req.params.name;
    const directoryPath = __basedir + "/src/upload/";

    res.download(directoryPath + fileName, fileName, (err) => {
        if (err) {
            res.status(500).send({
                message: "Could not download the file. " + err,
            });
        }
    });
};

module.exports = {
    upload,
    getListFiles,
    download,
};
