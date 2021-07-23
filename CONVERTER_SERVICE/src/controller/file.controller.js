const uploadFile = require("../middleware/upload");
const fs = require("fs");
const baseUrl = "http://localhost:8080/files/";

const BuildCmdObtainFrames= require('../model/converter/video/buildCmdObtainFrames');
const Compiler= require('../model/converter/compiler');

const upload = async (req, res) => {
    try {
        await uploadFile(req, res);

        if (req.file == undefined) {
            return res.status(400).send({ message: "Please upload a file!" });
        }

        const frames= new BuildCmdObtainFrames();
        const command= frames.returnCommand('C:/Users/ryzyn/Desktop/ffmepg/ffmpeg.exe','C:/Users/ryzyn/Desktop/ffmepg/canto.mp4','C:/Users/ryzyn/Desktop/ffmepg/','1','flv');
        const isValid= await Compiler.execute(command);

        if(isValid){
            
        }

        /*res.status(200).send({
            name: req.file.originalname,
            url: baseUrl + req.file.originalname,
            params: req.body,
        });*/
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
    const directoryPath = __basedir + "/resources/static/assets/uploads/";

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
    const directoryPath = __basedir + "/resources/static/assets/uploads/";

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
