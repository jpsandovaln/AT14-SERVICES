require("dotenv").config("../../.env");
const zipPath = process.env.ZIP_PATH;
const path = require("path");
const Md5File = require("../utilities/checksum");
var fs = require("fs");
const Zip = require("../middleware/zipping");
const VideoServices = require("../middleware/videoService");
require("dotenv").config("../../.env");

const changeVideoFormat = async (req, res) => {
    const nameFile = req.fields.filename;    
    const resultName = Date.now();
    const videoServices = new VideoServices(req.fields, nameFile, resultName);    

    const resultPathVideoFormat = await videoServices.changeVideoFormat();
    const resultPathFrames = await videoServices.obtainFrames();
    const resultPathAudio = await videoServices.obtainAudio();
    const zip = new Zip();
    const resultZipPath = zip.zipFiles(resultPathFrames, resultPathAudio, resultPathVideoFormat);
    const nameZipFile = path.basename(resultZipPath);

    res.status(200).send({
        name: resultName,
        filePath: "http://localhost:8080/files/" + nameZipFile,
        params: req.body
    });
};

const download = (req, res) => {
    const fileName = req.params.name;
    const directoryPath = zipPath + fileName; 

    res.download(directoryPath, fileName, (err) => {
        if (err) {
            res.status(500).send({
                message: "Could not download the file. " + err,
            });
        }
    });
};

module.exports = {
    changeVideoFormat, download, 
};
