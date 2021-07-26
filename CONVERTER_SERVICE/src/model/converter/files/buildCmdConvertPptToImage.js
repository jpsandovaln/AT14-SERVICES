const path = require("path");
const buildConvertPptToPdf = require("./buildCmdConvertPptToPdf");
const buildCmdConvertPdfToImage = require("./buildCmdConvertPdfToImage");
const deletePdfCmd = require("./deletePdfCmd");
/**
 * @Class
 * Build a string combining commands to convert from Ppt to image.
 */
class buildCmdConvertPptToImage {
    /**
     * @param {string} executablePathConverterPpt The path where executable codec to convert Ppt to file is
     * @param {string} executablePathConverterPdf The path where executable codec to convert to Pdf to image is.
     * @param {string} filePathConvert The ppt path to convert to image.
     * @param {string} outputPathConverted Path of the output of pdf format.
     * @param {string} outputFormatPdf Output pdf format.
     * @param {string} outputFormatImage Path of output image format.
     * @param {string} highQuality To increase the quality of the converter.
     */
    returnCommand(
        executablePathConverterPpt,
        executablePathConverterPdf,
        filePathConvert,
        outputPathConverted,
        outputFormatPdf,
        outputFormatImage,
        highQuality
    ) {
        const convertPptToPdf = new buildConvertPptToPdf();
        const convertPdfToImage = new buildCmdConvertPdfToImage();
        const pdfToDelete = new deletePdfCmd();

        const commandPptToPdf = convertPptToPdf.returnCommand(
            executablePathConverterPpt,
            filePathConvert,
            outputPathConverted
        );
        const commandPdfToImage = convertPdfToImage.returnCommand(
            executablePathConverterPdf,
            outputPathConverted +
                path.parse(filePathConvert).name +
                outputFormatPdf,
            outputPathConverted,
            outputFormatImage,
            highQuality
        );
        const commandPdfToDelete = pdfToDelete.returnCommand(
            outputPathConverted +
                path.parse(filePathConvert).name +
                outputFormatPdf
        );
        const SPACE = " ";
        const CONBINER_COMMAND = "&&";

        const command =
            commandPptToPdf +
            SPACE +
            CONBINER_COMMAND +
            SPACE +
            commandPdfToImage +
            SPACE;

        return command;
    }
}
