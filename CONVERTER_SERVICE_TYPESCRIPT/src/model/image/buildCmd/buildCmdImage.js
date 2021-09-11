"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.BuildCmdImage = void 0;
var cmdHeader_1 = require("../cmd/cmdHeader");
var cmdResize_1 = require("../cmd/cmdResize");
var cmdDoubling_1 = require("../cmd/cmdDoubling");
var cmdFooter_1 = require("../cmd/cmdFooter");
var parameters_1 = require("../../common/parameter/parameters");
var buildCmd_1 = require("./buildCmd");
var BuildCmdImage = /** @class */ (function (_super) {
    __extends(BuildCmdImage, _super);
    function BuildCmdImage(params, codecPath, imagePath, outputPath, resultName) {
        var _this = _super.call(this, params) || this;
        _this.codecPath = codecPath;
        _this.imagePath = imagePath;
        _this.outputPath = outputPath;
        _this.resultName = resultName;
        return _this;
    }
    BuildCmdImage.prototype.returnCmd = function () {
        var header = new cmdHeader_1.CmdHeader(_super.prototype.getParameters.call(this), this.codecPath, this.imagePath);
        var imageResize = new cmdResize_1.CmdResize(_super.prototype.getParameters.call(this));
        var imageDoubling = new cmdDoubling_1.CmdDoubling(_super.prototype.getParameters.call(this));
        var footer = new cmdFooter_1.CmdFooter(_super.prototype.getParameters.call(this), this.outputPath, this.resultName);
        header.setNextCommand(imageResize);
        imageResize.setNextCommand(imageDoubling);
        imageDoubling.setNextCommand(footer);
        return header.returnCommand("");
    };
    BuildCmdImage.prototype.getCodecPath = function () {
        return this.codecPath;
    };
    BuildCmdImage.prototype.setCodecPath = function (codecPath) {
        this.codecPath = codecPath;
    };
    BuildCmdImage.prototype.getImagePath = function () {
        return this.imagePath;
    };
    BuildCmdImage.prototype.setImagePath = function (imagePath) {
        this.imagePath = imagePath;
    };
    BuildCmdImage.prototype.getOutputPath = function () {
        return this.outputPath;
    };
    BuildCmdImage.prototype.setOutputPath = function (outputPath) {
        this.outputPath = outputPath;
    };
    BuildCmdImage.prototype.getResultName = function () {
        return this.codecPath;
    };
    BuildCmdImage.prototype.setResultName = function (resultName) {
        this.resultName = resultName;
    };
    return BuildCmdImage;
}(buildCmd_1.BuildCmd));
exports.BuildCmdImage = BuildCmdImage;
var params = new parameters_1.Parameters({
    audioFormat: ".mp3",
    resize: 180,
    doubling: 10,
    vflip: "true",
    hflip: "true",
    outputFormat: ".flv",
    frameScale: "400",
    timeBetweenFrames: "5",
    outputFormatFrames: ".png"
});
var cmd = new BuildCmdImage(params, "codec---> ", "image---> ", "output--->", "resulName");
console.log(cmd.returnCmd());
