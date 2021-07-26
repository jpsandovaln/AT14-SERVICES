const path = require("path");
/**
 * @Class
 * Build a string that is the command to delete an specific file.
 */
class DeletePdfCmd {

    returnCommand(pdfPathDelete) {
        const DELETE_COMMAND = "del";
        const SPACE = " ";

        const command = DELETE_COMMAND + SPACE + pdfPathDelete;
        return command;
    }
}
module.exports = DeletePdfCmd;
