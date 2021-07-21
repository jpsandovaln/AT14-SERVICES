const path = require("path");
/**
 * @Class
 * Build a string which is the command to flip a video file horizontally.
 */
class BuildCmdHInvertVideo {
    /**
     * @param {string} codecPath The path where video codec is.
     * @param {string} videoPath The video path to transform.
     * @param {string} outputPath The path where the resultant audio file will be.
     */
    constructor() { }

    returnCommand(codecPath, videoPath, outputPath) {
        const FFMPEG_I = " -i ";
        const FFMPEG_VF = " -vf ";
        const FFMPEG_H_FLIP = "hflip";
        const SPACE = " ";
        const QUOTES = '"';

        const command =
            codecPath +
            FFMPEG_I +
            QUOTES +
            videoPath +
            QUOTES +
            FFMPEG_VF +
            FFMPEG_H_FLIP +
            SPACE +
            QUOTES +
            outputPath +
            path.parse(videoPath).name +
            "_h_inverted" +
            path.extname(videoPath) +
            QUOTES;

        return command;
    }
}

module.exports = BuildCmdHInvertVideo;
