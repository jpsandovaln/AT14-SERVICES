require("dotenv").config("../../.env");
const fetching = require("../utilities/metadata");
const uploadFileMiddleware = require("../middleware/uploadFilesWithoutHush");

const getMetadata = async (req: any, res: any) => {
    await uploadFileMiddleware(req, res);
    const executePathExiftool = process.env.CONVERTER_PATH_EXIFTOOL;
    const uploadPath = process.env.UPLOAD_PATH;
    const nameFile = req.file.filename;
    const metadataP = await fetching(
        executePathExiftool,
        uploadPath + nameFile
    );

    res.send({ message: metadataP });
};

module.exports = getMetadata;
