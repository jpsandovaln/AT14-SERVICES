const path = require("path");
const VideoConverter = require("./videoConverter");
/**
 * @Class
 * Build a string which is the command to rotate a video file in different angles: 90, 180, 270.
 */
class BuildCmdRotateVideo extends VideoConverter {
    /**
     * @param {string} codecPath The path where video codec is.
     * @param {string} videoPath The video path to transform.
     * @param {string} outputPath The path where the resultant audio file will be.
     * @param {string} angle the angle of rotation for the video (90, 180, 270).
     */

    constructor(codecPath, videoPath, outputPath) {
        super(codecPath, videoPath, outputPath);
    }

    returnCommand(rotateAngle) {
        const FFMPEG_VF = " -vf ";
        const FFMPEG_TRANSPOSE_90 = "transpose=clock";
        const FFMPEG_TRANSPOSE_180 = "transpose=clock,transpose=clock";
        const FFMPEG_TRANSPOSE_270 =
            "transpose=clock,transpose=clock,transpose=clock";
        var FFMPEG_TRANSPOSE = "";

        if (rotateAngle === "90") FFMPEG_TRANSPOSE = FFMPEG_TRANSPOSE_90;
        if (rotateAngle === "180") FFMPEG_TRANSPOSE = FFMPEG_TRANSPOSE_180;
        if (rotateAngle === "270") FFMPEG_TRANSPOSE = FFMPEG_TRANSPOSE_270;

        const command = this.getCommand(
            FFMPEG_VF + FFMPEG_TRANSPOSE + this.SPACE + this.QUOTES,
            path.parse(this.videoPath).name +
                "_rotated" +
                path.extname(this.videoPath) +
                this.QUOTES
        );

        return command;
    }
}

module.exports = BuildCmdRotateVideo;
