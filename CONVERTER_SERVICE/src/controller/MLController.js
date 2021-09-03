require("dotenv").config("../../.env");
const zipPath = process.env.ZIP_PATH;
const path = require("path");
const Zip = require("../middleware/zipping");
const VideoServices = require("../middleware/videoService");
const uploadFileMiddleware = require("../middleware/uploadFilesWithoutHush");

const framesZipML = async (req, res) => {
    await uploadFileMiddleware(req, res);
    console.log(req)
    const nameFile = req.file.filename;
    const resultName = Date.now();
    const videoServices = new VideoServices(req.body, nameFile, resultName);

    const resultPathFrames = await videoServices.obtainFrames();
    const zip = new Zip();
    const pathFramesZip = resultPathFrames != "" ? await zip.zipImages(resultPathFrames) : "";
    const nameZipFile = path.basename(pathFramesZip);

    res.status(200).send([
        {
            name: nameFile,
            filePath: "http://localhost:8080/framesZipML/" + nameZipFile,
        },
    ]);
};

const downloadMLZip = (req, res) => {
    const filename = req.params.name;
    const directoryPath = zipPath + filename;
    res.download(directoryPath, filename, function (err) {
        if (err) {
            console.error(err);
        }
    });
};

module.exports = {
    framesZipML,
    downloadMLZip,
};
