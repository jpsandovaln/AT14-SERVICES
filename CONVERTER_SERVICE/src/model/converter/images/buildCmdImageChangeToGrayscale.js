const path = require('path');
/**
 * @Class
 * Build a string that is the command to add the option of change change image to grayscale.
 */
class BuildCmdImageChangeToGrayscale {
     /**
     * @param {string} executablePathGrayScale The path where executable codec is.
     * @param {string} imagePathGrayscale The image path to edit quality.
     * @param {string} outputPathChangeToGrayscale the extent to which the effect will affect the image.
     * @param {string} outputFormat Output image format.
     */    
    constructor() {}

    returnCommandToChangeImageToGrayscale(executablePathGrayScale, imagePathGrayscale, outputPathChangeToGrayscale, outputFormat ){
        const MAGICK_SPACE = ' '; 
        const CONVERT_GRAYSCALE = '-set';
        const CONVERT_GRAYSCALE_SYNTAX = 'colorspace Gray';
        const CONVERT_GRAYSCALE_SYNTAX_CONTINUE = '-separate';
        const CONVERT_GRAYSCALE_SYNTAX_CONTINUE2 = '-average'

        const command =
            executablePathGrayScale +
            MAGICK_SPACE +
            imagePathGrayscale +
            MAGICK_SPACE +
            CONVERT_GRAYSCALE +
            MAGICK_SPACE +
            CONVERT_GRAYSCALE_SYNTAX +
            MAGICK_SPACE +
            CONVERT_GRAYSCALE_SYNTAX_CONTINUE + 
            MAGICK_SPACE +
            CONVERT_GRAYSCALE_SYNTAX_CONTINUE2 +
            MAGICK_SPACE +
            outputPathChangeToGrayscale +
            path.parse(imagePathGrayscale).name + "_Change_ToGrayScale" +
            outputFormat;
            
        return command;
    }
}
module.exports = BuildCmdImageChangeToGrayscale;