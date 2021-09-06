const path = require("path");
/**
 * @Class
 * Build a string that is the command to change fade in the audio.
 */
class BuildCmdChangeAudioFadeIn {
    /**
     * @param {string} executablePathRotate The path where executable codec is.
     * @param {string} audioPath The audio path to change fade in. 
     * @param {string} outputPathAudio The audio path changed fade in.
     */
    returnCommandToChangeFadeInAudio(
        executablePathRotate,
        audioPath,
        outputPathAudio
    ) {
        const FFMPEG_SPACE = " ";
        const CONVERT_FADEIN = "-i";
        const CONVERT_FADEIN_COMMAND = "-af";
        const CONVERT_FADEIN_COMMAND1 = "fade=t=in:st=0:d=5";

        const command =
            executablePathRotate +
            FFMPEG_SPACE +
            CONVERT_FADEIN + 
            FFMPEG_SPACE +
            audioPath +
            FFMPEG_SPACE +
            CONVERT_FADEIN_COMMAND + 
            FFMPEG_SPACE + 
            CONVERT_FADEIN_COMMAND1 + 
            FFMPEG_SPACE + 
            outputPathAudio;
        return command;
    }
}
module.exports = BuildCmdChangeAudioFadeIn;
