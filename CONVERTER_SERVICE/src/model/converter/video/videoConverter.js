const path = require("path");
require("dotenv").config("../../.env");

const ffmpegPath = process.env.CONVERTER_PATH;
const outputPath = process.env.OUTPUT_PATH;
const videoPath = process.env.VIDEO_PATH;

class VideoConverter {
    constructor(videoPath) {
        this.codecPath = ffmpegPath;
        this.videoPath = videoPath;
        this.outputPath = outputPath;
        this.FFMPEG_I = " -i ";
        this.SPACE = " ";
        this.QUOTES = '"';
        this.prefix =
            this.codecPath +
            this.FFMPEG_I +
            this.QUOTES +
            this.videoPath +
            this.QUOTES;
    }
    getCommand(middle, tail) {
        const getCommand = this.prefix + middle + this.outputPath + tail;
        return getCommand;
    }
}
module.exports = VideoConverter;
