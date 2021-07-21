const path = require("path");
/**
 * @Class
 * Build a string that is the command to add effect paint to the image.
 */
class BuildCmdChangeImagePaint {
    /**
     * @param {string} executablePathPaint The path where executable codec is.
     * @param {string} imagePathPaint The image path to add effect paint.
     * @param {string} PaintImage the extent to which the effect will affect the image.
     * @param {string} outputPathPaint The path where the image will be saved.
     * @param {string} outputFormatPaint Output image format.
     */
    returnCommandToChangeImagePaint(
        executablePathPaint,
        imagePathPaint,
        PaintImage,
        outputPathPaint,
        outputFormatPaint
    ) {
        const MAGICK_SPACE = " ";
        const CONVERT_PAINT = " -paint ";

        const command =
            executablePathPaint +
            MAGICK_SPACE +
            imagePathPaint +
            CONVERT_PAINT +
            PaintImage +
            MAGICK_SPACE +
            outputPathPaint +
            path.parse(imagePathPaint).name +
            "_Change_Paint" +
            outputFormatPaint;
        return command;
    }
}
module.exports = BuildCmdChangeImagePaint;
