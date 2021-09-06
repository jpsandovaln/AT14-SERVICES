const path = require("path");
/**
 * @Class
 * Build a string that is the command to change channels the audio.
 */
class BuildCmdChangeAudioChannels {
    /**
     * @param {string} executablePath The path where executable codec is.
     * @param {string} audioPath The image path to rotate .
     * @param {string} outputPathAudio The image path after rotating.
     */
    returnCommandToChangeAudioChannels(
        executablePath,
        audioPath,
        outputPathAudio
    ) {
        const FFMPEG_SPACE = " ";
        const FFMPEG_COMMAND = "-i";
        const FFMPEG_COMMAND_FILTER_COMPLEX = "-filter_complex";
        const FFMPEG_COMMAND1 = "channelmap=map=FL-FR|FR-FL:channel_layout=stereo";

        const command =
            executablePath +
            FFMPEG_SPACE +
            FFMPEG_COMMAND + 
            FFMPEG_SPACE +
            audioPath +
            FFMPEG_SPACE +
            FFMPEG_COMMAND_FILTER_COMPLEX +
            FFMPEG_SPACE +
            FFMPEG_COMMAND1 +
            FFMPEG_SPACE +
            path.parse(audioPath).name +
            "_Change_channel" +
            outputPathAudio;
        return command;
    }
}
module.exports = BuildCmdChangeAudioChannels;
