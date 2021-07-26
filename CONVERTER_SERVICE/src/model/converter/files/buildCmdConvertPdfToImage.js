const path = require("path");
/**
 * @Class
 * Build a string that is the command to convert a Pdf file to an image.
 */
class BuildCmdConvertPdfToImage {
    /**
     * @param {string} executablePathConverterPdf The path where executable codec is.
     * @param {string} pdfPathConvert The pdf path to convert to image.
     * @param {string} outputPathConverted The image path after converted pdf.
     * @param {string} outputFormat Output image format.
     * @param {string} highQuality To increase the quality of the converter.
     */
    returnCommand(
        executablePathConverterPdf,
        pdfPathConvert,
        outputPathConverted,
        outputFormat,
        highQuality
    ) {
        const MAGICK_SPACE = " ";
        let HIGH_QUALITY = "";
        if (highQuality) {
            HIGH_QUALITY = MAGICK_SPACE + "-density" + MAGICK_SPACE + "600";
        }
        const command =
            executablePathConverterPdf +
            HIGH_QUALITY +
            MAGICK_SPACE +
            pdfPathConvert +
            MAGICK_SPACE +
            outputPathConverted +
            path.parse(pdfPathConvert).name +
            "-%02d" +
            outputFormat;
        console.log(command);
        return command;
    }
}
module.exports = BuildCmdConvertPdfToImage;
