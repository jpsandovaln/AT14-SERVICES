const path = require("path");
/**
 * @Class
 * Build a string that is the command to add the option of change quality to the image.
 */
class DeletePdfCmd {
    /**
     * @param {string} executablePathConverterPdf The path where executable codec is.
     * @param {string} pdfPathConvert The pdf path to convert to image.
     * @param {string} outputPathConverted The image path after converted pdf.
     * @param {string} outputFormat Output image format.
     */
    returnCommand(pdfPathDelete) {
        const DELETE_COMMAND = "del";
        const SPACE = " ";

        const command = DELETE_COMMAND + SPACE + pdfPathDelete;
        return command;
    }
}
module.exports = DeletePdfCmd;
