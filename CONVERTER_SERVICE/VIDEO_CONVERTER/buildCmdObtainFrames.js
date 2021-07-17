const path = require('path');

class BuildCmdObtainFrames {
    /**
     * @param {string} codecPath The path where video codec is.
     * @param {string} videoPath The video path to transform.
     * @param {string} outputPath The path where the resultant imeges will be.
     * @param {string} timeBetweenFrames The time to wait to extract the frames.
     * @param {string} outputFormat The output format for the resultant images, it can be: .bmp, .jpg, .png.
     */    
    constructor() {}

    returnCommand(codecPath, videoPath, outputPath, timeBetweenFrames, outputFormat) {
        const FFMPEG_I = ' -i '; 
        const FFMPEG_VF = ' -vf ';
        const FFMPEG_FPS = 'fps=fps=';
        const IMAGE_NAME = '/%d.';
        const SPACE = ' ';

        const command =
            codecPath +
            FFMPEG_I +
            videoPath +
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

const commandObtainFrames = new BuildCmdObtainFrames ();
const codecPath = "C:/Users/Usuario/Desktop/ffmpeg/ffmpeg.exe";
const videoPath = "C:/Users/Usuario/Desktop/ffmpeg/No_te_olvides.mp4";
const outputPath = "C:/Users/Usuario/Desktop/ffmpeg/";
console.log(commandObtainFrames.returnCommand(codecPath, videoPath, outputPath, '1', '.bmp')); 