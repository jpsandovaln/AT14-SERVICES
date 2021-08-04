const BuildCmdChangeVideoFormat = require("./buildCmdChangeVideoFormat");
const BuildCmdHInvertVideo = require("./buildCmdHInvertVideo");
const BuildCmdObtainAudio = require("./buildCmdObtainAudio");
const BuildCmdObtainFrames = require("./buildCmdObtainFrames");
const BuildCmdRotateVideo = require("./buildCmdRotateVideo");
const BuildCmdVInvertVideo = require("./buildCmdVInvertVideo");
const VideoConverter = require("./videoConverter");

class MasterVideoConverter extends VideoConverter {
    constructor(videoPath) {
        super(videoPath);
        this.changeVideoFormatBuilder = new BuildCmdChangeVideoFormat(
            videoPath
        );
        this.invertVideoHBuilder = new BuildCmdHInvertVideo(this.videoPath);
        this.obtainAudioBuilder = new BuildCmdObtainAudio(this.videoPath);
        this.obtainFramesBuilder = new BuildCmdObtainFrames(this.videoPath);
        this.rotateVideoBuilder = new BuildCmdRotateVideo(this.videoPath);
        this.invertVideoVBuilder = new BuildCmdVInvertVideo(this.videoPath);
    }
    changeVideoFormat(...args) {
        const command = this.changeVideoFormatBuilder.returnCommand(...args);
        return command;
    }
    invertVideoH(...args) {
        const command = this.invertVideoHBuilder.returnCommand(...args);
        return command;
    }
    obtainAudio(...args) {
        const command = this.obtainAudioBuilder.returnCommand(...args);
        return command;
    }
    obtainFrames(...args) {
        const command = this.obtainFramesBuilder.returnCommand(...args);
        return command;
    }
    rotateVideo(...args) {
        const command = this.rotateVideoBuilder.returnCommand(...args);
        return command;
    }
    invertVideoV(...args) {
        const command = this.invertVideoVBuilder.returnCommand(...args);
        return command;
    }
}

module.exports = MasterVideoConverter;
