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
exports.CmdFooter = void 0;
var cmd_1 = require("./cmd");
var QUOTES = '"';
var SPACE = " ";
var CmdFooter = /** @class */ (function (_super) {
    __extends(CmdFooter, _super);
    function CmdFooter(parameters, outputPath, resultName) {
        var _this = _super.call(this, parameters) || this;
        _this.outputPath = outputPath;
        _this.resultName = resultName;
        return _this;
    }
    CmdFooter.prototype.setNextCommand = function () { };
    ;
    CmdFooter.prototype.returnCommand = function (command) {
        command = command + QUOTES + this.outputPath + this.resultName + this.getParameter('outputFormat') + QUOTES;
        return command;
    };
    ;
    return CmdFooter;
}(cmd_1.Command));
exports.CmdFooter = CmdFooter;
