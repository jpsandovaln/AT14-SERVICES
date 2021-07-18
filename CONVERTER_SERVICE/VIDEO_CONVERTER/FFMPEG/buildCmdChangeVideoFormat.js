
const path = require('path');
/**
 * @Class
 * Build a string which is the command for change the formar of a video, its quality, 
 * its resolution, and the number of images per minuto.
 */
class BuildCmdChangeVideoFormat {
    /**
     * @param {string} codecPath The path where video codec is.
     * @param {string} videoPath The video path to transform.
     * @param {string} ratio The number of images per minute (Undefined by default). 
     * @param {string} scale The resolution (width x height) of the video that we want to obtain (Undefined by default).
     * @param {string} quality The quality of the video that we want to obtein (values between 0 - 31, being 0 the highest quality - Undefined by default).
     * @param {string} outputPath The path where the resultant imeges will be.     
     * @param {string} outputFormat The output format for the resultant video, it can be: .bmp, .jpg, .png.
     */    
    constructor() {}
    
    returnCommand(codecPath, videoPath, outputPath, ratio, scale, quality, outputFormat) {
        const FFMPEG_I = ' -i '; 
        const FFMPEG_RATIO = ' -r ';
        const FFMPEG_SCALE = ' -s ';
        const SPACE = ' ';
        const FFMPEG_QUALITY = ' -qscale ';
        const QUOTES = "\"";
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
            QUOTES +
            outputPath + 
            path.parse(videoPath).name + 
            outputFormat +
            QUOTES;

        return command;
    }
}

module.exports = BuildCmdChangeVideoFormat;


