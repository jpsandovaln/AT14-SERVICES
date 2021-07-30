class VideoConverter {
    constructor(codecPath, videoPath, outputPath) {
        this.codecPath = codecPath;
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
