/**
 * @Class
 * Build a string command for change the scale of the video. 
 */
 class CmdScale {
    constructor() { }

    /**
     * @param {string} scale The resolution (width x height) of the video that we want to obtain (Undefined by default).
     */
    static returnCommand(scale) {
        if (scale != undefined) {
            const FFMPEG_SCALE = "-s";
            const SPACE = " ";
            const command = FFMPEG_SCALE + SPACE + scale + SPACE;
            return command;
        } else {
            return "";
        }
    }
}

module.exports = CmdScale;

