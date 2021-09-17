const path = require("path");
/**
 * @Class
 * Build a string which is the command to extract the audio from a video file.
 */
class BuildCmdObtainAudio {
    constructor() { }

    /**
     * @param {string} codecPath The path where video codec is.
     * @param {string} videoPath The video path to transform.
     * @param {string} outputPath The path where the resultant audio file will be.
     */
    static returnCommand(codecPath, videoPath, resultName, outputPath) {
        const FFMPEG_I = " -i ";
        const FFMPEG_VN = " -vn ";
        const OUTPUT_FORMAT = ".mp3";
        const QUOTES = '"';

        let command =
            codecPath +
            FFMPEG_I +
            QUOTES +
            videoPath +
            QUOTES +
            FFMPEG_VN +
            QUOTES +
            outputPath +
            resultName +
            OUTPUT_FORMAT +
            QUOTES;
        return command;
    }
}

module.exports = BuildCmdObtainAudio;
