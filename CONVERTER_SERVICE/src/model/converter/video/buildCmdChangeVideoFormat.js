const path = require("path");
const VideoConverter = require("./videoConverter");
/**
 * @Class
 * Build a string which is the command for change the formar of a video, its quality,
 * its resolution, and the number of images per minuto.
 */
class BuildCmdChangeVideoFormat extends VideoConverter {
    /**
     * @param {string} codecPath The path where video codec is.
     * @param {string} videoPath The video path to transform.
     * @param {string} ratio The number of images per minute (Undefined by default).
     * @param {string} scale The resolution (width x height) of the video that we want to obtain (Undefined by default).
     * @param {string} quality The quality of the video that we want to obtein (values between 0 - 31, being 0 the highest quality - Undefined by default).
     * @param {string} outputPath The path where the resultant imeges will be.
     * @param {string} outputFormat The output format for the resultant video.
     */
    constructor(videoPath) {
        super(videoPath);
    }

    returnCommand(ratio, scale, quality, outputFormat) {
        const FFMPEG_RATIO = " -r ";
        const FFMPEG_SCALE = " -s ";
        const FFMPEG_QUALITY = " -qscale ";
        const CONVERT = "_converted";
        const command = this.getCommand(
            (ratio === undefined ? "" : FFMPEG_RATIO + ratio) +
                (scale === undefined ? "" : FFMPEG_SCALE + scale) +
                (quality === undefined ? "" : FFMPEG_QUALITY + quality) +
                this.SPACE +
                this.QUOTES,
            path.parse(this.videoPath).name +
                CONVERT +
                outputFormat +
                this.QUOTES
        );

        return command;
    }
}

module.exports = BuildCmdChangeVideoFormat;
