require("dotenv").config();
const outputPath = process.env.OUTPUT_PATH;
const path = require("path");
const Zip = require("../middleware/zipping");
const VideoServices = require("../middleware/videoService");

const changeVideoFormat = async (req, res) => {
    const nameFile = req.fields.filename;
    const resultName = Date.now();
    const videoServices = new VideoServices(req.fields, nameFile, resultName);

    const resultPathVideoFormat = await videoServices.changeVideoFormat();
    const resultPathFrames = req.fields.obtainFrames == "true" ? await videoServices.obtainFrames() : "";
    const resultPathAudio = req.fields.obtainAudio == "true" ? await videoServices.obtainAudio() : "";
    const zip = new Zip();
    const pathFramesZip = resultPathFrames != "" ? await zip.zipImages(resultPathFrames) : "";
    const resultZipPath = await zip.zipFiles(
        outputPath + resultName,
        pathFramesZip,
        resultPathAudio,
        resultPathVideoFormat
    );
    const nameZipFile = path.basename(resultZipPath);

    res.status(200).send([
        {
            name: nameFile,
            filePath: "http://localhost:4000/files/" + nameZipFile,
        },
    ]);
};

const download = (req, res) => {
    const filename = req.params.name;
    const directoryPath = outputPath + filename;
    res.download(directoryPath, filename, function (err) {
        if (err) {
            console.error(err);
        }
    });
};

module.exports = {
    changeVideoFormat,
    download,
};
