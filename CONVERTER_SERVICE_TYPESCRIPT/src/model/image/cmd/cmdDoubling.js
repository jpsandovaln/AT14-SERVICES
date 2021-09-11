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
exports.CmdDoubling = void 0;
var limits_1 = require("./validations/limits");
var tpyes_1 = require("./validations/tpyes");
var cmd_1 = require("./cmd");
var CmdDoubling = /** @class */ (function (_super) {
    __extends(CmdDoubling, _super);
    function CmdDoubling(parameters) {
        var _this = _super.call(this, parameters) || this;
        _this.MAGICK_DOUBLING = "-liquid-rescale";
        _this.SPACE = " ";
        _this.limit = new limits_1.Limits(1, 500);
        _this.type = new tpyes_1.Types();
        return _this;
    }
    CmdDoubling.prototype.setNextCommand = function (command) {
        this.cmd = command;
    };
    CmdDoubling.prototype.isValid = function (value) {
        var parameter = this.getParameter(value);
        if (this.type.isNumber(parameter)) {
            if (this.limit.isValid(parameter) && this.type.isNumber(parameter))
                return true;
            else
                return false;
        }
    };
    CmdDoubling.prototype.returnCommand = function (command) {
        if (this.isValid("doubling"))
            command = command + this.SPACE + this.MAGICK_DOUBLING + this.SPACE;
        return this.cmd.returnCommand(command);
    };
    return CmdDoubling;
}(cmd_1.Command));
exports.CmdDoubling = CmdDoubling;
