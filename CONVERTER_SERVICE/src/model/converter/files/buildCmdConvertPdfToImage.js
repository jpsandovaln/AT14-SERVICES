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
        highQuality,
        size,
        rotate,
        paint,
        monochrome,
        grayScale,
        type
    ) {
        const MAGICK_SPACE = " ";
        let HIGH_QUALITY = "";
        let SIZE = "";
        let ROTATE = "";
        let PAINT = "";
        let MONOCHROME = "";
        let GRAYSCALE = "";
        let TYPE = "";
        if (highQuality != undefined && highQuality != "") {
            HIGH_QUALITY =
                MAGICK_SPACE + "-density" + MAGICK_SPACE + "" + highQuality;
        }
        if (size!= undefined && size != "") {
            SIZE = MAGICK_SPACE + "-size" + MAGICK_SPACE + "" + size;
        }
        if (rotate!= undefined && rotate != "") {
            ROTATE = MAGICK_SPACE + "-rotate" + MAGICK_SPACE + "" + rotate;
        }
        if (paint!= undefined && paint != "") {
            PAINT = MAGICK_SPACE + "-paint" + MAGICK_SPACE + "" + paint;
        }
        if (monochrome!= undefined && monochrome != "") {
            MONOCHROME = MAGICK_SPACE + "-monochrome";
        }
        if (grayScale!= undefined && grayScale != "") {
            GRAYSCALE = MAGICK_SPACE + "-colorspace" + MAGICK_SPACE + "gray";
        }
        if (type!= undefined && type != "") {
            TYPE = MAGICK_SPACE+ "" + type;
        }

        const command =
            executablePathConverterPdf +
            HIGH_QUALITY +
            MAGICK_SPACE +
            SIZE +
            MAGICK_SPACE +
            ROTATE +
            MAGICK_SPACE +
            PAINT +
            MAGICK_SPACE +
            TYPE +
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
