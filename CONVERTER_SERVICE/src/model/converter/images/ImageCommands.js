const CommandSchema = require("../../../controller/image/CommandSchema.js");
const Interpreter = require("../../../controller/image/Interpreter.js");

class ImageCommands {

    rotateImage = new CommandSchema('rotateImage', ' -rotate ');
    doublingImage = new CommandSchema('doublingImage', ' -liquid-rescale ');
    formatImage = new CommandSchema('formatImage', '');
    monochromeImage = new CommandSchema('monochromeImage', ' -monochrome ');
    paintImage = new CommandSchema('paintImage', ' -paint ');
    qualityImage = new CommandSchema('qualityImage', ' -quality ');
    resizeImage = new CommandSchema('resizeImage', ' -resize ');
    grayScaleImage = new CommandSchema('grayScaleImage', ' -set colorspace Gray -separate ');


    interpreter = new Interpreter([
        this.rotateImage,
        this.doublingImage,
        this.formatImage,
        this.monochromeImage,
        this.paintImage,
        this.qualityImage,
        this.resizeImage,
        this.grayScaleImage
    ]);

}

module.exports = ImageCommands;

