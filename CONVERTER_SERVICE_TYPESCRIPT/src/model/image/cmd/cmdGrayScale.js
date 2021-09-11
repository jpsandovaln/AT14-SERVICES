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
exports.CmdGrayScale = void 0;
var parameters_1 = require("../../common/parameter/parameters");
var cmd_1 = require("./cmd");
var MAGICK_GRAYSCALE = "-set colorspace Gray -separate";
var SPACE = " ";
var CmdGrayScale = /** @class */ (function (_super) {
    __extends(CmdGrayScale, _super);
    function CmdGrayScale(parameters) {
        return _super.call(this, parameters) || this;
    }
    CmdGrayScale.prototype.setNextCommand = function (command) {
        this.cmd = command;
    };
    CmdGrayScale.prototype.returnCommand = function (command) {
        if (this.getParameter("grayScale") == "true")
            command = command + SPACE + MAGICK_GRAYSCALE + SPACE;
        return command /*this.cmd.returnCommand(command)*/;
    };
    return CmdGrayScale;
}(cmd_1.Command));
exports.CmdGrayScale = CmdGrayScale;
var params = new parameters_1.Parameters({ audioFormat: ".jpg", grayScale: "true" });
var cmd = new CmdGrayScale(params);
console.log(cmd.returnCommand("commando anterior"));
