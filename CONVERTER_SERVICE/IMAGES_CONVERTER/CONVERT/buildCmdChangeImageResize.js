const path = require('path');
/**
 * @Class
 * Create a string that is the command to add the option to resize the image.
 */

class BuildCmdChangeImageResize {
     /**
     * @param {string} executablePathConvert The path where executable codec is.
     * @param {string} imagePathResize The image path to edit size.
     * @param {string} outputPath The image path after changed the size.
     * @param {string} sizeImage the size you want the image to bee.
     * @param {string} outputFormat Output image format.
     */    
    constructor() {}

    returnCommandToResizeImages(executablePathConvert, imagePathResize, outputPath, sizeImage, outputFormat) {        
        const MAGICK_SPACE = ' '; 
        const CONVERT_RESIZE = ' -resize ';

        const command =
            executablePathConvert +
            MAGICK_SPACE +
            imagePathResize +
            CONVERT_RESIZE + 
            sizeImage +
            MAGICK_SPACE + 
            outputPath +
            path.parse(imagePathResize).name + "_resized" +
            outputFormat;
        return command;
    }
}

module.exports = BuildCmdChangeImageResize;