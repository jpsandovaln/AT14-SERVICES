const path = require("path");
/**
 * @Class
 * Build a string that is the command to add the option of change quality to the image.
 */
class BuildCmdChangeImageQuality {
    /**
     * @param {string} executablePathConverterQuality The path where executable codec is.
     * @param {string} imagePathChangeQuality The image path to edit quality.
     * @param {string} outputPathQuality The image path after changed quality.
     * @param {string} qualityImage the extent to which the effect will affect the image.
     * @param {string} outputChangeQuality Output image format.
     */
    returnCommandToChangesQualityImages(
        executablePathConverterQuality,
        imagePathChangeQuality,
        outputPathQuality,
        qualityImage,
        outputChangeQuality
    ) {
        const MAGICK_SPACE = " ";
        const CONVERT_QUALITY = " -quality ";

        const command =
            executablePathConverterQuality +
            MAGICK_SPACE +
            imagePathChangeQuality +
            CONVERT_QUALITY +
            qualityImage +
            MAGICK_SPACE +
            outputPathQuality +
            path.parse(imagePathChangeQuality).name +
            "_Change_quality" +
            outputChangeQuality;
        return command;
    }
}
module.exports = BuildCmdChangeImageQuality;
