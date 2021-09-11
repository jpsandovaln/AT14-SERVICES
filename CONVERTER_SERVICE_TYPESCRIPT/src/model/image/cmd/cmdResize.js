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
exports.CmdResize = void 0;
var limits_1 = require("./validations/limits");
var tpyes_1 = require("./validations/tpyes");
var cmd_1 = require("./cmd");
var CmdResize = /** @class */ (function (_super) {
    __extends(CmdResize, _super);
    function CmdResize(parameters) {
        var _this = _super.call(this, parameters) || this;
        _this.MAGICK_RESIZE = "-resize";
        _this.SPACE = " ";
        _this.limit = new limits_1.Limits(1, 500);
        _this.type = new tpyes_1.Types();
        return _this;
    }
    CmdResize.prototype.setNextCommand = function (command) {
        this.cmd = command;
    };
    CmdResize.prototype.isValid = function (value) {
        if (this.type.isNumber(value)) {
            if (this.limit.isValid(value))
                return true;
            else
                return false;
        }
    };
    CmdResize.prototype.returnCommand = function (command) {
        var parameter = this.getParameter("resize");
        if (this.isValid(parameter))
            command =
                command +
                    this.SPACE +
                    this.MAGICK_RESIZE +
                    this.SPACE +
                    parameter +
                    this.SPACE;
        return this.cmd.returnCommand(command);
    };
    return CmdResize;
}(cmd_1.Command));
exports.CmdResize = CmdResize;
/*
let params = new Parameters({ audioFormat: ".jpg", resize: 100 });
let cmd = new CmdResize(params);
console.log(cmd.returnCommand("anterior"));*/
