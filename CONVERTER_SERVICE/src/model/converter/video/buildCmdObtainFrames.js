const VideoConverter = require("./videoConverter");

/**
 * @Class
 * Build a string which is the command to extract the frames from a video.
 */
class BuildCmdObtainFrames extends VideoConverter {
    /**
     * @param {string} codecPath The path where video codec is.
     * @param {string} videoPath The video path to transform.
     * @param {string} outputPath The path where the resultant imeges will be.
     * @param {string} timeBetweenFrames The time to wait to extract the frames.
     * @param {string} outputFormat The output format for the resultant images, it can be: .bmp, .jpg, .png.
     */
    constructor(codecPath, videoPath, outputPath) {
        super(codecPath, videoPath, outputPath);
    }

    returnCommand(timeBetweenFrames, outputFormat) {
        const FFMPEG_VF = " -vf ";
        const FFMPEG_FPS = "fps=fps=";
        const IMAGE_NAME = "/%d";

        const command = this.getCommand(
            FFMPEG_VF + FFMPEG_FPS + timeBetweenFrames + this.SPACE,
            IMAGE_NAME + outputFormat
        );

        return command;
    }
}

module.exports = BuildCmdObtainFrames;
