const path = require("path");
const BuildCmdObtainFrames = require("./buildCmdObtainFrames");
const Cmd = require("./cmd");
/**
 * @Class
 * Build a string which is the command for change the formar of a video, its quality,
 * its resolution, and the number of images per minuto.
 */
class BuildCmdChangeVideoFormat {
    /**
     * @param {string} codecPath The path where video codec is.
     * @param {string} videoPath The video path to transform.
     * @param {string} ratio The number of images per minute (Undefined by default).
     * @param {string} scale The resolution (width x height) of the video that we want to obtain (Undefined by default).
     * @param {string} quality The quality of the video that we want to obtein (values between 0 - 31, being 0 the highest quality - Undefined by default).
     * @param {string} outputPath The path where the resultant imeges will be.
     * @param {string} outputFormat The output format for the resultant video.
     */
    constructor() { }

    static returnCommand(codecPath, videoPath, parameters, outputPath, outputFormat) {
        const FFMPEG_I = " -i ";
        const CONVERT = "_converted";
        const QUOTES = '"';
        const SPACE = " "
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
            QUOTES
        return command;
    }
}

module.exports = BuildCmdChangeVideoFormat;
