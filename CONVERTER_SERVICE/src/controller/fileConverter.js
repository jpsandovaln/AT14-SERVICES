require("dotenv").config();
const fs = require("fs");
const uploadImage = require("../middleware/uploadImageFile");
const BuildCmdConvertPdfToImage = require("../model/converter/files/buildCmdConvertPdfToImage");
const zipPath = __dirname + "/../../resources/imagesProcessor/";
const Zip = require("../middleware/zipping");

const Compiler = require("../model/compiler");
const path = require("path");

const endPointToConvertPdfToImage = async (req, res) => {
    const dateFolder = Date.now();
    await fs.mkdir(
        __dirname + "/../../resources/imagesProcessor/" + dateFolder,
        function (err) {}
    );

    await uploadImage(req, res);
    let fileList = new Array();
    const CommandToConvertPdfToImage = new BuildCmdConvertPdfToImage();
    const ImageNameFile = req.file.filename;
    const pdfPathConvert =
        __dirname + "/../../resources/outpathPDF/" + ImageNameFile;
    const executablePathConverterPdf =
        __dirname + "/../../thirdParty/convert.exe";
    const outputPathConverted =
        __dirname + "/../../resources/imagesProcessor/" + dateFolder + "/";
    const outputFormat = req.body.outputFormat;
    const highQuality = req.body.quality;
    const size = req.body.outputSize;
    const rotate = req.body.rotation;
    const paint = req.body.paintEffect;
    const monochrome = req.body.monochrome;
    const grayScale = req.body.grayScale;
    const outputZipConverted =
        __dirname + "/../../resources/imagesProcessor/" + dateFolder + "";
        const type = req.body.type;

    const compiler = new Compiler();
    await compiler.execute(
        CommandToConvertPdfToImage.returnCommand(
            executablePathConverterPdf,
            pdfPathConvert,
            outputPathConverted,
            outputFormat,
            highQuality,
            size,
            rotate,
            paint,
            /*monochrome,
            grayScale*/
            type
        )
    );

    fileList = await fs.readdirSync(outputPathConverted);
    const nameFile = req.file.filename;

    const zip1 = new Zip();
    const pathFramesZip =
        outputPathConverted != ""
            ? await zip1.zipImages(outputZipConverted)
            : "";
    const nameZipFile = path.basename(pathFramesZip);

    res.status(200).send([
        {
            name: nameFile,
            filePath: "http://localhost:4028/convertPdftoImage/" + nameZipFile,
        },
    ]);
};
const downloadPdfZip = (req, res) => {
    const filename = req.params.name;
    const directoryPath = zipPath + filename;
    res.download(directoryPath, filename, function (err) {
        if (err) {
            console.error(err);
        }
    });
};

module.exports = {
    endPointToConvertPdfToImage,
    downloadPdfZip,
};
