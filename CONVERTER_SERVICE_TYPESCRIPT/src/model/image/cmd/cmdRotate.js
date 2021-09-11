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
exports.CmdRotate = void 0;
var parameters_1 = require("../../common/parameter/parameters");
var limits_1 = require("./validations/limits");
var tpyes_1 = require("./validations/tpyes");
var cmd_1 = require("./cmd");
var CmdRotate = /** @class */ (function (_super) {
    __extends(CmdRotate, _super);
    function CmdRotate(parameters) {
        var _this = _super.call(this, parameters) || this;
        _this.MAGICK_ROTATE = "-rotate";
        _this.SPACE = " ";
        _this.limit = new limits_1.Limits(1, 360);
        _this.type = new tpyes_1.Types();
        return _this;
    }
    CmdRotate.prototype.setNextCommand = function (command) {
        this.cmd = command;
    };
    CmdRotate.prototype.isValid = function (value) {
        var parameter = this.getParameter(value);
        if (this.type.isNumber(parameter)) {
            if (this.limit.isValid(parameter) && this.type.isNumber(parameter))
                return true;
            else
                return false;
        }
    };
    CmdRotate.prototype.returnCommand = function (command) {
        if (this.isValid("rotate"))
            command = command + this.SPACE + this.MAGICK_ROTATE + this.SPACE;
        return command /* this.cmd.returnCommand(command)*/;
    };
    return CmdRotate;
}(cmd_1.Command));
exports.CmdRotate = CmdRotate;
var params = new parameters_1.Parameters({ audioFormat: ".jpg", rotate: false });
var cmd = new CmdRotate(params);
console.log(cmd.returnCommand("anterior"));
