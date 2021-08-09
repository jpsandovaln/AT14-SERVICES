const FileModel = require("../database/fileModel");
const path = require("path");
const Md5File = require("../utilities/checksum");
var fs = require("fs");
const VideoServices = require("../middleware/videoService");
require("dotenv").config("../../.env");

const changeVideoFormat = async (req, res) => {
    const nameFile = req.file.filename;
    const uploadPath = process.env.UPLOAD_PATH;
    const videoServices = new VideoServices(req.body, nameFile);

    const resultPathVideoFormat = await videoServices.changeVideoFormat();
    const resultPathFrames = await videoServices.obtainFrames();
    const resultPathAudio = await videoServices.obtainAudio();

    const hash = Md5File.getMD5File(uploadPath + nameFile);
    const resulthash = hash;

    res.send([
        { message: resultPathVideoFormat },
        { message: resultPathFrames },
        { message: resultPathAudio },
        { message: resulthash },
    ]);

    const fileModel = new FileModel({
        name: req.file.originalname,
        path: resultPathVideoFormat,
        checksum: hash,
    });
    fileModel.save(function (err, doc) {
        if (err) return console.error(err);
        console.log("Document inserted successfully!");
    });

    //zipping.zipDownload(req, res);
};

module.exports = {
    changeVideoFormat
};
