const baseUrl = "http://localhost:4000/";
const fs = require("fs");
const uploadAudioMiddleware = require("../middleware/uploadFiles");
const BuildCmdChangeAudioFormat = require("../model/converter/audio/buildCmdChangeVariousAudioFormat");
const BuildCmdChangeFadeInAudio = require("../model/converter/audio/buildCmdChangeFadeInAudio");
const BuildCmdChangeFadeOutAudio = require("../model/converter/audio/buildCmdChangeFadeOutAudio");
const BuildCmdChangeAudioChannels = require("../model/converter/audio/buildCmdChangeAudioChannels");
const BuildCmdAudioInverseFilter = require("../model/converter/audio/buildCmdAudioInverseFilter");
const Compiler = require("../models/converter/compiler");
const path = require("path");

const endPointToChangeAudioFormat = async (req, res) => {
    await uploadAudioMiddleware(req, res);
    const AudioNameFile = req.file.filename;
    const prove = __dirname + "/../middleware/resource/" + AudioNameFile;
    const executablePathFFMPEG = __dirname + "/../../thirdParty/ffmpeg.exe";
    const outputPath = __dirname + "/../middleware/audioProcessor/";
    const outputFormat = req.body.outputFormat;

    const audioFormat = new BuildCmdChangeAudioFormat();
    const compiler = new Compiler();
    compiler.execute(
        audioFormat.returnCommandToChangeFormatAudio(
            executablePathFFMPEG,
            prove,
            outputPath,
            outputFormat
        )
    );
    const downloadPath =
        outputPath + path.parse(AudioNameFile).name + outputFormat;
    res.send({ message: downloadPath });
};

const endPointToChangeAudioChannels = async (req, res) => {
    await uploadAudioMiddleware(req, res);
    const AudioNameFile = req.file.filename;
    const audioPath = __dirname + "/../middleware/resource/" + AudioNameFile;
    const executablePathConverter = __dirname + "/../../thirdParty/ffmpeg.exe";
    const outputPath = __dirname + "/../middleware/audioProcessor/";
    const outputFormat = req.body.outputFormat;

    const imageFormat = new BuildCmdChangeFadeInAudio();
    const compiler = new Compiler();
    compiler.execute(
        imageFormat.returnCommandToChangeAudioChannels(
            executablePathConverter,
            audioPath,
            outputPath
        )
    );
    const downloadPath =
        outputPath + path.parse(AudioNameFile).name
    res.send({ message: downloadPath });
};

const endPointToChangeFadeInAudio = async (req, res) => {
    await uploadAudioMiddleware(req, res);
    const AudioNameFile = req.file.filename;
    const audioPath = __dirname + "/../middleware/resource/" + AudioNameFile;
    const executablePathConverter = __dirname + "/../../thirdParty/ffmpeg.exe";
    const outputPath = __dirname + "/../middleware/audioProcessor/";
    const outputFormat = req.body.outputFormat;

    const audioFormat = new BuildCmdChangeFadeInAudio();
    const compiler = new Compiler();
    compiler.execute(
        audioFormat.returnCommandToChangeFadeInAudio(
            executablePathConverter,
            audioPath,
            outputPath
        )
    );
    const downloadPath =
        outputPath + path.parse(AudioNameFile).name + outputFormat;
    res.send({ message: downloadPath });
};

const endPointToChangeFadeOutAudio = async (req, res) => {
    await uploadAudioMiddleware(req, res);
    const AudioNameFile = req.file.filename;
    const audioPath = __dirname + "/../middleware/resource/" + AudioNameFile;
    const executablePathConverter = __dirname + "/../../thirdParty/ffmpeg.exe";
    const outputPath = __dirname + "/../middleware/audioProcessor/";

    const audioFormat = new BuildCmdChangeFadeOutAudio();
    const compiler = new Compiler();
    compiler.execute(
        audioFormat.returnCommandToChangeFadeOutAudio(
            executablePathConverter,
            audioPath,
            outputPath
        )
    );
    const downloadPath =
        outputPath + path.parse(AudioNameFile).name + outputFormat;
    res.send({ message: downloadPath });
};

const endPointToAudioInverseFilter = async (req, res) => {
    await uploadAudioMiddleware(req, res);
    const AudioNameFile = req.file.filename;
    const audioPath = __dirname + "/../middleware/resource/" + AudioNameFile;
    const executablePathConverter = __dirname + "/../../thirdParty/ffmpeg.exe";
    const outputPath = __dirname + "/../middleware/audioProcessor/";
    const outputFormat = req.body.outputFormat;

    const audioFormat = new BuildCmdAudioInverseFilter();
    const compiler = new Compiler();
    compiler.execute(
        audioFormat.returnCommandToInvertAudio(
            executablePathConverter,
            audioPath,
            outputPath,
            outputFormat
        )
    );
    const downloadPath =
        outputPath + path.parse(AudioNameFile).name + outputFormat;
    res.send({ message: downloadPath });
};

module.exports = {
    endPointToChangeAudioFormat,
    endPointToChangeAudioChannels,
    endPointToChangeFadeInAudio,
    endPointToChangeFadeOutAudio,
    endPointToAudioInverseFilter,
};
