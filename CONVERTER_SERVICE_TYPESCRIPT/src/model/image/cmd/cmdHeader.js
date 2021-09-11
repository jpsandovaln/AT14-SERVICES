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
exports.CmdHeader = void 0;
var cmd_1 = require("./cmd");
var QUOTES = '"';
var SPACE = " ";
var CmdHeader = /** @class */ (function (_super) {
    __extends(CmdHeader, _super);
    function CmdHeader(parameters, codecPath, imagePath) {
        var _this = _super.call(this, parameters) || this;
        _this.codecPath = codecPath;
        _this.imagePath = imagePath;
        return _this;
    }
    CmdHeader.prototype.setNextCommand = function (command) {
        this.cmd = command;
    };
    CmdHeader.prototype.returnCommand = function (command) {
        command =
            command + this.codecPath + QUOTES + this.imagePath + QUOTES + SPACE;
        return this.cmd.returnCommand(command);
    };
    return CmdHeader;
}(cmd_1.Command));
exports.CmdHeader = CmdHeader;
