const path = require("path");
/**
 * @Class
 * Build a string that is the command to add effect color monochrome to the image.
 */
class BuildCmdChangeImageColorMonochrome {
    /**
     * @param {string} executablePathMonochrome The path where executable codec is.
     * @param {string} imagePathMonochrome The image path to add effect monochrome.
     * @param {string} outputPathMonochrome The path where the image changed will be saved
     * @param {string} outputChangeColorMonochrome Output image format.
     */
    returnCommandToChangeImageColorMonochrome(
        executablePathMonochrome,
        imagePathMonochrome,
        outputPathMonochrome,
        outputChangeColorMonochrome
    ) {
        const MAGICK_SPACE = " ";
        const CONVERT_MONOCHROME = " -monochrome ";

        const command =
            executablePathMonochrome +
            MAGICK_SPACE +
            imagePathMonochrome +
            CONVERT_MONOCHROME +
            outputPathMonochrome +
            path.parse(imagePathMonochrome).name +
            "_Change_Color_Monochrome" +
            outputChangeColorMonochrome;
        return command;
    }
}
module.exports = BuildCmdChangeImageColorMonochrome;
