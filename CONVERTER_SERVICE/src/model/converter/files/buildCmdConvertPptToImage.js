const path = require("path");
const buildConvertPptToPdf = require("./buildCmdConvertPptToPdf");
const buildCmdConvertPdfToImage = require("./buildCmdConvertPdfToImage");
const deletePdfCmd = require("./deletePdfCmd");
/**
 * @Class
 * Build a string that is the command to add the option of change quality to the image.
 */
class buildCmdConvertPptToImage {
    /**
     * @param {string} executablePathConverterPdf The path where executable codec is.
     * @param {string} pdfPathConvert The pdf path to convert to image.
     * @param {string} outputPathConverted The image path after converted pdf.
     * @param {string} outputFormat Output image format.
     */
    returnCommand(
        executablePathConverterPpt,
        executablePathConverterPdf,
        filePathConvert,
        outputPathConverted,
        outputFormatPdf,
        outputFormatImage
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
            outputFormatImage
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
            SPACE /*+
            CONBINER_COMMAND +
            SPACE +
            commandPdfToDelete;*/

        console.log("aaaaaaaaaaaaaaaaaaaaaaaaa = " + command);
        return command;
    }
}
module.exports = buildCmdConvertPptToImage;
const Compiler = require("../../compiler");

const commanCmdConvertPptToImage = new buildCmdConvertPptToImage();
const executablePathConverterPdf =
    "D:/usuario/Desktop/fundacion_jala/prog101/Proyecto/AT14-SERVICES/CONVERTER_SERVICE/src/model/converter/images/thirdParty/convert.exe";
const executablePathConverterPpt =
    "D:/usuario/Desktop/fundacion_jala/prog101/Proyecto/AT14-SERVICES/CONVERTER_SERVICE/src/model/converter/files/thirdParty/LibreOffice/program/swriter.exe";
const filePathConvert = "D:/usuario/Desktop/Programacion_funcional.pptx";
const outputFormatPdf = ".pdf";
const outputPathConverted = "D:/usuario/Desktop/converted/";
const outputFormatImage = ".jpg";

const compiler = new Compiler();
compiler.execute(
    commanCmdConvertPptToImage.returnCommand(
        executablePathConverterPpt,
        executablePathConverterPdf,
        filePathConvert,
        outputPathConverted,
        outputFormatPdf,
        outputFormatImage
    )
);
