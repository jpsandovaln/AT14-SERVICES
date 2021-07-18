
const path = require('path');

/**
 * @Class
 * Build a string which is the command to extract the audio from a video file.
 */
 class BuildCmdObtainAudio {
    /**
     * @param {string} codecPath The path where video codec is.
     * @param {string} videoPath The video path to transform.
     * @param {string} outputPath The path where the resultant audio file will be.     
     */    
    constructor() {}
    returnCommand(codecPath, videoPath, outputPath) {
        const FFMPEG_I = ' -i '; 
        const FFMPEG_VN = ' -vn ';
        const SPACE = ' ';
        const QUOTES = "\"";
        const OUTPUT_FORMAT = '.mp3';

        const command =
            codecPath +
            FFMPEG_I +
            QUOTES +
            videoPath +
            QUOTES +
            FFMPEG_VN +
            QUOTES +
            outputPath + 
            path.parse(videoPath).name + 
            OUTPUT_FORMAT +
            QUOTES;
        return command;
    }
}

module.exports = BuildCmdObtainAudio;

