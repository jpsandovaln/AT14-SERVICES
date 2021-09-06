const path = require("path");
/**
 * @Class
 * Build a string that is the command to change audio format.
 */
class BuildCmdChangeAudioFormats {
    /**
     * @param {string} executablePath The path where executable codec is.
     * @param {string} audioPath The image path to rotate .
     * @param {string} outputPathChangeFormat The image path after rotating.
     */
    returnCommandToChangeFormatAudio(
        executablePath,
        audioPath,
        outputPathChangeFormat
    ) {
        const FFMPEG_SPACE = " ";
        const FFMPEG_CONVERT = "-i";

        const command =
            executablePath +
            FFMPEG_SPACE +
            FFMPEG_CONVERT + 
            FFMPEG_SPACE +
            audioPath +
            FFMPEG_SPACE +
            outputPathChangeFormat;
        return command;
    }
}
module.exports = BuildCmdChangeAudioFormats;
