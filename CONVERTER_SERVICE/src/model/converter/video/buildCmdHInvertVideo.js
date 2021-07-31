const path = require("path");
const VideoConverter = require("./videoConverter");
/**
 * @Class
 * Build a string which is the command to flip a video file horizontally.
 */
class BuildCmdHInvertVideo extends VideoConverter {
    /**
     * @param {string} codecPath The path where video codec is.
     * @param {string} videoPath The video path to transform.
     * @param {string} outputPath The path where the resultant audio file will be.
     */
    constructor(codecPath, videoPath, outputPath) {
        super(codecPath, videoPath, outputPath);
    }

    returnCommand() {
        const FFMPEG_VF = " -vf ";
        const FFMPEG_H_FLIP = "hflip";

        const command = this.getCommand(
            FFMPEG_VF + FFMPEG_H_FLIP + this.SPACE + this.QUOTES,
            path.parse(this.videoPath).name +
                "_h_inverted" +
                path.extname(this.videoPath) +
                this.QUOTES
        );

        return command;
    }
}

module.exports = BuildCmdHInvertVideo;
