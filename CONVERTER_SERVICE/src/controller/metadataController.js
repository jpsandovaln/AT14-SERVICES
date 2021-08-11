require("dotenv").config("../../.env");
const fetching = require("../utilities/metadata");
const uploadFileMiddleware = require("../middleware/upload");

const getMetadata = async (req, res) => {
    await uploadFileMiddleware(req, res);
    const executePathExiftool = process.env.CONVERTER_PATH_EXIFTOOL;
    const uploadPath = process.env.UPLOAD_PATH;
    const nameFile = req.file.filename;
    const metadata = await fetching(executePathExiftool, uploadPath + nameFile);

    res.send({ message: metadata });
};

module.exports = getMetadata;
