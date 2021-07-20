const path = require('path');
/**
 * @Class
 * Build a string that is the command to rotate the image.
 */
class BuildCmdChangeImageDirection {
     /**
     * @param {string} executablePathRotate The path where executable codec is.
     * @param {string} imagePathRotate The image path to rotate .
     * @param {string} outputPathRotate The image path after rotating.
     * @param {string} RotateImage How many degrees should the image rotate.
     * @param {string} outputChangeRotateImage Output image format.
     */    
    constructor() {}

    returnCommandToRotateImages(executablePathRotate, imagePathRotate, outputPathRotate, RotateImage, outputChangeRotateImage){
        const MAGICK_SPACE = ' '; 
        const CONVERT_ROTATE = ' -rotate ';

        const command =
            executablePathRotate +
            MAGICK_SPACE +
            imagePathRotate +
            CONVERT_ROTATE +
            RotateImage +
            MAGICK_SPACE + 
            outputPathRotate +
            path.parse(imagePathRotate).name + "_Change_direction" +
            outputChangeRotateImage;
        return command;
    }
}
module.exports = BuildCmdChangeImageDirection;