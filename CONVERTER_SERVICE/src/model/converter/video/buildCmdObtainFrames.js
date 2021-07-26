/**
 * @Class
 * Build a string which is the command to extract the frames from a video.
 */
class BuildCmdObtainFrames {
    /**
     * @param {string} codecPath The path where video codec is.
     * @param {string} videoPath The video path to transform.
     * @param {string} outputPath The path where the resultant imeges will be.
     * @param {string} timeBetweenFrames The time to wait to extract the frames.
     * @param {string} outputFormat The output format for the resultant images, it can be: .bmp, .jpg, .png.
     */
    constructor() { }

    returnCommand(
        codecPath,
        videoPath,
        outputPath,
        timeBetweenFrames,
        outputFormat
    ) {
        const FFMPEG_I = " -i ";
        const FFMPEG_VF = " -vf ";
        const FFMPEG_FPS = "fps=fps=";
        const IMAGE_NAME = "/%d";
        const SPACE = " ";
        const QUOTES = '"';

        const command =
            codecPath +
            FFMPEG_I +
            QUOTES +
            videoPath +
            QUOTES +
            FFMPEG_VF +
            FFMPEG_FPS +
            timeBetweenFrames +
            SPACE +
            outputPath +
            IMAGE_NAME +
            outputFormat;
        return command;
    }
}

module.exports = BuildCmdObtainFrames;
