require("dotenv").config("../../.env");
const fetching = require("../utilities/metadata");
const uploadFileMiddleware = require("../middleware/uploadFilesWithoutHush");

const getMetadata = async (req, res) => {
    await uploadFileMiddleware(req, res);
    const executePathExiftool = process.env.CONVERTER_PATH_EXIFTOOL;
    console.log(executePathExiftool);
    const uploadPath = process.env.UPLOAD_PATH;
    console.log(uploadPath);
    const nameFile = req.file.filename;
    metadata = await fetching(executePathExiftool, uploadPath + nameFile);

    res.send({ message: metadata });
};

module.exports = getMetadata;
