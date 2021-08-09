/**
 * @Class
 * Build a string which is the command to extract the frames from a video.
 */
 class BuildCmdObtainFrames {
    constructor() { }

    /**
     * @param {string} codecPath The path where video codec is.
     * @param {string} videoPath The video path to transform.
     * @param {string} param The object where will be the necessary parameters for the command..
     * @param {string} outputPath The path where the resultant imeges will be.
     * @param {string} outputFormat The output format for the resultant images, it can be: .bmp, .jpg, .png.
     */
    static returnCommand(codecPath, videoPath, param, outputPath) {
        const FFMPEG_I = " -i ";
        const FFMPEG_VF = " -vf ";
        const IMAGE_NAME = "%d";
        const QUOTES = '"';
        const COMMA = ",";
        const SPACE = " ";
        let parameter = "";
        const parScale =
            param.frameScale === undefined ? "" : "scale=" + param.frameScale + ":-1";
        const parGreyS = param.grayScale === "true" ? "hue=s=0" : "";
        const parFps = "fps=fps=" + param.timeBetweenFrames;
        if (parScale != "") parameter = parameter + parScale;
        if (parameter != "")
            parGreyS != "" ? (parameter = parameter + COMMA + parGreyS) : parameter;
        else parGreyS != "" ? (parameter = parameter + parGreyS) : parameter;
        if (parameter != "") parameter = parameter + COMMA + parFps;
        else parameter = parFps;

        let command =
            codecPath +
            FFMPEG_I +
            QUOTES +
            videoPath +
            QUOTES +
            FFMPEG_VF +
            QUOTES +
            parameter +
            QUOTES +
            SPACE +
            QUOTES +
            outputPath +
            IMAGE_NAME +
            param.framesFormat +
            QUOTES;
        return command;
    }
}

module.exports = BuildCmdObtainFrames;
