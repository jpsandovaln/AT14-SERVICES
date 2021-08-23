require("dotenv").config("../../.env");
const { fetching } = require("../utilities/metadata");
const uploadFileMiddleware = require("../middleware/uploadFilesWithoutHush");
const path = require("path");
const executePathExiftool = process.env.CONVERTER_PATH_EXIFTOOL;
const uploadPath = process.env.UPLOAD_PATH;
const outputPath = process.env.OUTPUT_PATH;

const obtainMetadata = async (req, res) => {
    await uploadFileMiddleware(req, res);
    const nameFile = req.file.filename;
    const resultPath = await fetching(executePathExiftool, uploadPath + nameFile, nameFile, outputPath);

    res.status(200).send({
        name: nameFile,
        filePath:
            "http://localhost:8080/filesMetadata/" + path.basename(resultPath),
        params: req.body,
    });
};

const downloadMetadata = (req, res) => {
    const fileName = req.params.name;
    const directoryPath = outputPath + fileName;

    res.download(directoryPath, fileName, (err) => {
        if (err) {
            res.status(500).send({
                message: "Could not download the file. " + err,
            });
        }
    });
};

module.exports = {
    obtainMetadata,
    downloadMetadata,
};
