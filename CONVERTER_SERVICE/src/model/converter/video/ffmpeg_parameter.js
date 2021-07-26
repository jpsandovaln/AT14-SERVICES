class FfmpegParameter {

    constructor(filePath, ffmpegBinaryPath) {
        this.filePath = filePath;
        this.javaBinaryPath = ffmpegBinaryPath;
    }

    getFilePath() {
        return this.filePath;
    }

    getJavaBinaryPath() {
        return this.ffmpegBinaryPath;
    }
}

module.exports = FfmpegParameter;