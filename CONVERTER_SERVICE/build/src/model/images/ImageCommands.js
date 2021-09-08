"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageCommands = void 0;
const CommandSchema_1 = require("./CommandSchema");
const Interpreter_1 = require("./Interpreter");
class ImageCommands {
    constructor() {
        this.rotateImage = new CommandSchema_1.CommandSchema("rotateImage", " -rotate ");
        this.doublingImage = new CommandSchema_1.CommandSchema("doublingImage", " -liquid-rescale ");
        this.formatImage = new CommandSchema_1.CommandSchema("formatImage", "");
        this.monochromeImage = new CommandSchema_1.CommandSchema("monochromeImage", " -monochrome ");
        this.paintImage = new CommandSchema_1.CommandSchema("paintImage", " -paint ");
        this.qualityImage = new CommandSchema_1.CommandSchema("qualityImage", " -quality ");
        this.resizeImage = new CommandSchema_1.CommandSchema("resizeImage", " -resize ");
        this.grayScaleImage = new CommandSchema_1.CommandSchema("grayScaleImage", " -set colorspace Gray -separate ");
        this.interpreter = new Interpreter_1.Interpreter([
            this.rotateImage,
            this.doublingImage,
            this.formatImage,
            this.monochromeImage,
            this.paintImage,
            this.qualityImage,
            this.resizeImage,
            this.grayScaleImage,
        ]);
    }
}
exports.ImageCommands = ImageCommands;
