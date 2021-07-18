const path = require('path');
/**
 * @Class
 * Build a string which is the command to rotate a video file in different angles: 90, 180, 270.
 */
 class BuildCmdRotateVideo {
    /**
     * @param {string} codecPath The path where video codec is.
     * @param {string} videoPath The video path to transform.
     * @param {string} outputPath The path where the resultant audio file will be.    
     * @param {string} angle the angle of rotation for the video (90, 180, 270).
     */    
    constructor() {}

    returnCommand(codecPath, videoPath, outputPath, rotateAngle) {
        const FFMPEG_I = ' -i '; 
        const FFMPEG_VF = ' -vf ';
        const FFMPEG_TRANSPOSE_90 = 'transpose=clock';
        const FFMPEG_TRANSPOSE_180 = 'transpose=clock,transpose=clock';
        const FFMPEG_TRANSPOSE_270 = 'transpose=clock,transpose=clock,transpose=clock';
        var FFMPEG_TRANSPOSE = '';
        const SPACE = ' ';
        const QUOTES = "\"";

        if(rotateAngle === '90') FFMPEG_TRANSPOSE = FFMPEG_TRANSPOSE_90;
        if(rotateAngle === '180') FFMPEG_TRANSPOSE = FFMPEG_TRANSPOSE_180;
        if(rotateAngle === '270') FFMPEG_TRANSPOSE = FFMPEG_TRANSPOSE_270;

        const command =
            codecPath +
            FFMPEG_I +
            QUOTES +
            videoPath +
            QUOTES +
            FFMPEG_VF +
            FFMPEG_TRANSPOSE + 
            SPACE +
            QUOTES +
            outputPath + 
            path.parse(videoPath).name + '_rotated' +
            path.extname(videoPath) +
            QUOTES;
     
        return command;
    }
}

module.exports = BuildCmdRotateVideo;
