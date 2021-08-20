require("dotenv").config("../../.env");
const outputPath = process.env.OUTPUT_PATH;
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
    const resultPathFrames = (req.fields.obtainFrames == 'true' ? await videoServices.obtainFrames() : "");
    const resultPathAudio = (req.fields.obtainAudio == 'true' ? await videoServices.obtainAudio() : "");
    const zip = new Zip();
    const pathFramesZip = (resultPathFrames != "" ? await zip.zipImages(resultPathFrames) : "");
    const resultZipPath = await zip.zipFiles(outputPath + resultName, pathFramesZip, resultPathAudio, resultPathVideoFormat);
    const nameZipFile = path.basename(resultZipPath);

    res.status(200).send({
        name: resultName,
        filePath: "http://localhost:8080/files/" + nameZipFile,
        params: req.body
    });
};

const download = (req, res) => {
    const fileName = req.params.name;
    const directoryPath = outputPath + fileName; 

    res.download(directoryPath, fileName, (err) => {
        if (err) {
            res.status(500).send({
                message: "Could not download the file. " + err,
            });
        }
        else {
            res.send({ message: "successful download" });
        }
    });
};

module.exports = {
    changeVideoFormat, download, 
};
