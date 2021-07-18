
const path = require('path');
/**
 * @Class
 * Build a string which is the command to extract the frames from a video.
 */
class BuildCmdChangeVideoFormat {
    /**
     * @param {string} codecPath The path where video codec is.
     * @param {string} videoPath The video path to transform.
     * @param {string} ratio 
     * @param {string} scale 
     * @param {string} quality 
     * @param {string} outputPath The path where the resultant imeges will be.     
     * @param {string} outputFormat The output format for the resultant video, it can be: .bmp, .jpg, .png.
     */    
    constructor() {}
    //codecPath -i videoPath -r 5 -s 320x240 -qscale 0 C:\Users\Usuario\Desktop\ffmpeg\noteee.flv

    returnCommand(codecPath, videoPath, outputPath, ratio, scale, quality, outputFormat) {
        const FFMPEG_I = ' -i '; 
        const FFMPEG_RATIO = ' -r ';
        const FFMPEG_SCALE = ' -s ';
        const SPACE = ' ';
        const FFMPEG_QUALITY = ' -qscale ';
        const QUOTES = "\"";
        ( ratio = undefined ? "" : "")
        const command =
            codecPath +
            FFMPEG_I +
            QUOTES +
            videoPath + 
            QUOTES + 
            ((ratio === undefined) ? "" : FFMPEG_RATIO + ratio) + //FFMPEG_RATIO + 
            //ratio + 
            ((scale === undefined) ? "" : FFMPEG_SCALE + scale) + //FFMPEG_SCALE +
            //scale +
            ((quality === undefined) ? "" : FFMPEG_QUALITY + quality) + //FFMPEG_QUALITY +
            //quality + 
            SPACE +
            outputPath + 
            path.parse(videoPath).name + 
            outputFormat;

        return command;
    }
}

module.exports = BuildCmdChangeVideoFormat;

const commandChangeVideoFormat = new BuildCmdChangeVideoFormat();
const codecPath = "C:/Users/Usuario/Desktop/ffmpeg/ffmpeg.exe";
const videoPath = "C:/Users/Usuario/Desktop/ffmpeg/No te olvides.mp4";
const outputPath = "C:/Users/Usuario/Desktop/ffmpeg/";
console.log(commandChangeVideoFormat.returnCommand(codecPath, videoPath, outputPath, '5', '320x240', '0', '.flv')); 
//compiler.execute(commandObtainFrames.returnCommand(codecPath, videoPath, outputPath, '1', '.bmp'));
