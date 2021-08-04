const path = require("path");
const VideoConverter = require("./videoConverter");

/**
 * @Class
 * Build a string which is the command to extract the audio from a video file.
 */
class BuildCmdObtainAudio extends VideoConverter {
    /**
     * @param {string} codecPath The path where video codec is.
     * @param {string} videoPath The video path to transform.
     * @param {string} outputPath The path where the resultant audio file will be.
     */
    constructor(codecPath, videoPath, outputPath) {
        super(codecPath, videoPath, outputPath);
    }
    returnCommand() {
        const FFMPEG_VN = " -vn ";
        const OUTPUT_FORMAT = ".mp3";

        const command = this.getCommand(
            FFMPEG_VN + this.QUOTES,
            path.parse(this.videoPath).name + OUTPUT_FORMAT + this.QUOTES
        );
        return command;
    }
}

module.exports = BuildCmdObtainAudio;
