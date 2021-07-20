const path = require('path');
/**
 * @Class
 * Build a string that is the command to add effect doubling to the image.
 */
class BuildCmdChangeImageDoubling {
     /**
     * @param {string} executablePathDoubling The path where executable codec is.
     * @param {string} imagePathDoubling The image path to add effect doubling.
     * @param {string} DoublingImage the extent to which the effect will affect the image.
     * @param {string} outputPathDoubling The path where the image will be saved.
     * @param {string} outputChangeDoubling Output image format.
     */    
    constructor() {}

    returnCommandToChangeImageDoubling(executablePathDoubling, imagePathDoubling, DoublingImage, outputPathDoubling, outputChangeDoubling){
        const MAGICK_SPACE = ' '; 
        const CONVERT_DOUBLING = ' -liquid-rescale ';
        const CONVERT_DOUBLING_SYNTAX = '%\! ';

        const command =
            executablePathDoubling +
            MAGICK_SPACE +
            imagePathDoubling +
            CONVERT_DOUBLING +
            DoublingImage +
            CONVERT_DOUBLING_SYNTAX +
            outputPathDoubling +
            path.parse(imagePathDoubling).name + "_Change_Doubling" +
            outputChangeDoubling;
        return command;
    }
}
module.exports = BuildCmdChangeImageDoubling;