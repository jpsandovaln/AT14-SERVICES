/**
 * @Class
 * Build a string command for change the number of images per minute.
 */
class CmdRatio {
    constructor() { }

    /**
     * @param {string} ratio The number of images per minute (Undefined by default).
     */
    static returnCommand(ratio) {
        if (ratio != undefined) {
            const FFMPEG_RATIO = "-r";
            const SPACE = " ";
            const command = FFMPEG_RATIO + SPACE + ratio + SPACE;
            return command;
        } else {
            return "";
        }
    }
}

module.exports = CmdRatio;

