const path = require("path");
/**
 * @Class
 * Build a string that is the command to change fade out the audio.
 */
class BuildCmdChangeAudioFadeOut {
    /**
     * @param {string} executablePathRotate The path where executable codec is.
     * @param {string} audioPath The audio path to change fade out.
     */
    returnCommandToChangeFadeOutAudio(
        executablePathRotate,
        audioPath
    ) {
        const FFMPEG_SPACE = " ";
        const CONVERT_FADEIN = "-i";
        const CONVERT_FADEOUT_COMMAND = "-af";
        const CONVERT_FADEOUT_COMMAND1 = "afade=t=out:st=5:d=5";

        const command =
            executablePathRotate +
            FFMPEG_SPACE +
            CONVERT_FADEIN + 
            FFMPEG_SPACE +
            audioPath +
            FFMPEG_SPACE +
            CONVERT_FADEOUT_COMMAND + 
            FFMPEG_SPACE + 
            CONVERT_FADEOUT_COMMAND1 + 
            FFMPEG_SPACE + 
            path.parse(audioPath).name +
            "_FADE_IN" 
        return command;
    }
}
module.exports = BuildCmdChangeAudioFadeOut;
