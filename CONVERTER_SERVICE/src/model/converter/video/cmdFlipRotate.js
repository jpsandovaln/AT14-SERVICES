/**
 * @Class
 * Build a string command which can to flip a video file horizontally, vertically and rotate it in
 * different angles: 90, 180, 270
 */
class CmdFlipRotate {
    constructor() { }

    /**
     * @param {string} angle the angle of rotation for the video (90, 180, 270).
     * @param {boolean} vflip to flip the video file vertically.
     * @param {boolean} hflip to flip the video file horizontally.
     */
    static returnCommand(angle, vflip, hflip) {
        const FFMPEG_VF = "-vf";
        const FFMPEG_TRANSPOSE_90 = "transpose=clock";
        const FFMPEG_TRANSPOSE_180 = "transpose=clock,transpose=clock";
        const FFMPEG_TRANSPOSE_270 = "transpose=clock,transpose=clock,transpose=clock";
        const FFMPEG_H_FLIP = "hflip";
        const FFMPEG_V_FLIP = "vflip";
        let command = "";
        let parameter = "";
        const SPACE = " ";
        const QUOTES = '"';
        const COMMA = ",";
        if (angle === "90") parameter = parameter + FFMPEG_TRANSPOSE_90;
        if (angle === "180") parameter = parameter + FFMPEG_TRANSPOSE_180;
        if (angle === "270") parameter = parameter + FFMPEG_TRANSPOSE_270;
        if (parameter == "") {
            if (vflip === 'true') parameter = parameter + FFMPEG_V_FLIP;
        } else {
            if (vflip === 'true') parameter = parameter + COMMA + FFMPEG_V_FLIP;
        }
        if (parameter != "") {
            if (hflip === 'true') parameter = parameter + COMMA + FFMPEG_H_FLIP;
        } else {
            if (hflip === 'true') parameter = parameter + FFMPEG_H_FLIP;
        }
        command = command + FFMPEG_VF + SPACE + QUOTES + parameter + QUOTES + SPACE;
        return command;
    }
}

module.exports = CmdFlipRotate;
