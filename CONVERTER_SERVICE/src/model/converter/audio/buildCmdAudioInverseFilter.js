const path = require("path");
/**
 * @Class
 * Build a string that is the command to invert audio.
 */
class BuildCmdInvertAudio {
    /**
     * @param {string} executablePath The path where executable codec is.
     * @param {string} audioPath The image path to rotate .
     * @param {string} outputPathAudio The image path after rotating.
     */
    returnCommandToInvertAudio(
        executablePath,
        audioPath,
        outputPathAudio,
    ) {
        const FFMPEG_SPACE = " ";
        const CONVERT_AUDIO = "-i";
        const CONVERT_AUDIO_COMMAND = "-af";
        const CONVERT_AUDIO_COMMAND_FILTER = "aeval='-val(0)':c=same";

        const command =
            executablePath +
            FFMPEG_SPACE +
            CONVERT_AUDIO +
            FFMPEG_SPACE +
            audioPath +
            FFMPEG_SPACE +
            CONVERT_AUDIO_COMMAND +
            FFMPEG_SPACE + 
            CONVERT_AUDIO_COMMAND_FILTER +
            FFMPEG_SPACE +
            outputPathAudio;
        return command;
    }
}
module.exports = BuildCmdInvertAudio;
