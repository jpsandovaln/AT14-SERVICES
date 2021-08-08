const BuildCmdChangeVideoFormat = require("../model/converter/video/buildCmdChangeVideoFormat");
const BuildCmdObtainFrames = require("../model/converter/video/buildCmdObtainFrames");
const BuildCmdObtainAudio = require("../model/converter/video/buildCmdObtainAudio");
const Compiler = require("../model/compiler");
const FileModel = require("../database/fileModel");
const path = require("path");
const Md5File = require("../utilities/checksum");
var fs = require("fs");

const changeVideoFormat = async (req, res) => {
    const VideoNameFile = req.file.filename;
    const videoPath = __dirname + "/../middleware/resource/" + VideoNameFile;
    const codecPath = __dirname + "/../../thirdParty/ffmpeg.exe";
    const outputPath = __dirname + "/../middleware/filesProcessor/";
    const outputFormat = req.body.outputFormat;
    const outputFrames = req.body.outputFormatFrames;

    compiler = new Compiler();

    const cmdVideoFormat = BuildCmdChangeVideoFormat.returnCommand(
        codecPath,
        videoPath,
        req.body,
        outputPath,
        outputFormat
    );

    await compiler.execute(cmdVideoFormat);
    const resultPathVideoFormat =
        outputPath + path.parse(VideoNameFile).name + outputFormat;

    const dir = outputPath + path.parse(VideoNameFile).name;
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }

    const cmdObtainFrames = BuildCmdObtainFrames.returnCommand(
        codecPath,
        videoPath,
        req.body,
        dir + "/",
        outputFrames
    );

    await compiler.execute(cmdObtainFrames);
    const resultPathFrames = dir;

    const cmdObtainAudio = BuildCmdObtainAudio.returnCommand(
        codecPath,
        videoPath,
        outputPath
    );
    
    await compiler.execute(cmdObtainAudio);
    const resultPathAudio = outputPath + path.parse(VideoNameFile).name + ".mp3";

    const hash = Md5File.getMD5File(videoPath);
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

const getData = async (req, res) => {
    const data = await FileModel.find().lean().exec();
    res.status(200).send({ data });
};

const findDataById = async (req, res) => {
    const data = await FileModel.findById(req.params.id);
    res.status(200).send({ data });
};

const deleteDataById = async (req, res) => {
    const deleteData = await FileModel.deleteOne({ _id: req.params.id });
    res.status(200).send({ deleteData });
};

const updateDataById = async (req, res) => {
    const updatedData = await FileModel.updateOne(
        { _id: req.params.id },
        { $set: { name: req.body.name } }
    );
    res.status(200).send({ updatedData });
};

module.exports = {
    changeVideoFormat,
    getData,
    deleteDataById,
    findDataById,
    updateDataById,
};
