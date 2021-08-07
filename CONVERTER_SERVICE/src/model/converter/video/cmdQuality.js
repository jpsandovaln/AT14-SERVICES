/**
 * @Class
 * Build a string command for change the scale of the video. 
 */
class CmdQuality {
    constructor() { }

    /**
     * @param {string} quality The quality of the video that we want to obtein (values between 0 - 31, being 0 the highest quality - Undefined by default).
     */
    static returnCommand(quality) {
        if (quality != undefined) {
            const FFMPEG_QUALITY = "-qscale";
            const SPACE = " ";
            const command = FFMPEG_QUALITY + SPACE + quality + SPACE;
            return command;
        } else {
            return "";
        }
    }
}

module.exports = CmdQuality;
