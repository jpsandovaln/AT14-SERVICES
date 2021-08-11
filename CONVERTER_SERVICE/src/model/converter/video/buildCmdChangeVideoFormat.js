const path = require("path");
const Cmd = require("./cmd");
/**
 * @Class
 * Build a string which is the command for change the formar of a video, its quality,
 * its resolution, and the number of images per minuto.
 */
class BuildCmdChangeVideoFormat {
    constructor() { }

    /**
     * @param {string} codecPath The path where video codec is.
     * @param {string} videoPath The video path to transform.
     * @param {string} parameters The object where will be the necesary parameters for the command.
     * @param {string} outputPath The path where the resultant imeges will be.
     * @param {string} outputFormat The output format for the resultant video.
     */
    static returnCommand(
        codecPath,
        videoPath,
        parameters,
        outputPath,
        outputFormat
    ) {
        const FFMPEG_I = " -i ";
        const CONVERT = "_converted";
        const QUOTES = '"';
        const SPACE = " ";
        const command =
            codecPath +
            FFMPEG_I +
            QUOTES +
            videoPath +
            QUOTES +
            SPACE +
            Cmd.returnCommand(parameters) +
            QUOTES +
            outputPath +
            path.parse(videoPath).name +
            outputFormat +
            QUOTES;
        return command;
    }
}

module.exports = BuildCmdChangeVideoFormat;
