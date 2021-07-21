const path = require("path");
/**
 * @Class
 * Build a string that is the command to add the option of change format to the image.
 */
class BuildCmdChangeImageFormat {
    /**
     * @param {string} executablePathMagick The path where executable codec is.
     * @param {string} imagePathChangeFormat The image path to edit format.
     * @param {string} outputPath The image path after changed.
     * @param {string} outputFormat Output image format.
     */
    returnCommandToConverterImages(
        executablePathMagick,
        imagePathChangeFormat,
        outputPath,
        outputFormat
    ) {
        const MAGICK_SPACE = " ";

        const command =
            executablePathMagick +
            MAGICK_SPACE +
            imagePathChangeFormat +
            MAGICK_SPACE +
            outputPath +
            path.parse(imagePathChangeFormat).name +
            outputFormat;
        return command;
    }
}
module.exports = BuildCmdChangeImageFormat;
