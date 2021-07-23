const path = require("path");
/**
 * @Class
 * Build a string that is the command to add the option of change quality to the image.
 */
class BuildCmdConvertPdfToImage {
    /**
     * @param {string} executablePathConverterPdf The path where executable codec is.
     * @param {string} pdfPathConvert The pdf path to convert to image.
     * @param {string} outputPathConverted The image path after converted pdf.
     * @param {string} outputFormat Output image format.
     */
     returnCommand(
        executablePathConverterPdf,
        pdfPathConvert,
        outputPathConverted,
        outputFormat
    ) {
        const MAGICK_SPACE = " ";
        const CONVERT_QUALITY = " -quality ";

        const command =
            executablePathConverterPdf +
            //MAGICK_SPACE +
            //"-density"+
            //MAGICK_SPACE +
            //'600'+
            MAGICK_SPACE +
            pdfPathConvert +
            MAGICK_SPACE +
            outputPathConverted +
            path.parse(pdfPathConvert).name +
            '-%02d'+
            outputFormat;
            console.log(command)
        return command;
    }
}
module.exports = BuildCmdConvertPdfToImage;
/*const Compiler = require("../../compiler");

const CommandToConvertPdfToImage = new BuildCmdConvertPdfToImage();
const executablePathConverterPdf = "D:/usuario/Desktop/fundacion_jala/prog101/Proyecto/AT14-SERVICES/CONVERTER_SERVICE/src/model/converter/images/thirdParty/convert.exe";
const pdfPathConvert = "D:/usuario/Desktop/PROGRA101Class1.pdf";
const outputPathConverted = "D:/usuario/Desktop/converted/";
const outputFormat = ".jpg";

const compiler = new Compiler();
compiler.execute(
    CommandToConvertPdfToImage.returnCommand(
        executablePathConverterPdf,
        pdfPathConvert,
        outputPathConverted,
        outputFormat
    )
);*/
//compiler.execute(executablePathConverterPdf+" "+"-density 300 -quality 96"+" "+pdfPathConvert+" "+"pdf.jpg"




