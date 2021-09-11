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
exports.CmdMonochrome = void 0;
var parameters_1 = require("../../common/parameter/parameters");
var cmd_1 = require("./cmd");
var MAGICK_MONOCHROME = "-monochrome";
var SPACE = " ";
var CmdMonochrome = /** @class */ (function (_super) {
    __extends(CmdMonochrome, _super);
    function CmdMonochrome(parameters) {
        return _super.call(this, parameters) || this;
    }
    CmdMonochrome.prototype.setNextCommand = function (command) {
        this.cmd = command;
    };
    CmdMonochrome.prototype.returnCommand = function (command) {
        if (this.getParameter("monochrome") == "true")
            command = command + SPACE + MAGICK_MONOCHROME + SPACE;
        return command /*this.cmd.returnCommand(command)*/;
    };
    return CmdMonochrome;
}(cmd_1.Command));
exports.CmdMonochrome = CmdMonochrome;
var params = new parameters_1.Parameters({ audioFormat: ".jpg", monochrome: "true" });
var cmd = new CmdMonochrome(params);
console.log(cmd.returnCommand("anterior"));
