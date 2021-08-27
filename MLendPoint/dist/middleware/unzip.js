"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var adm_zip_1 = __importDefault(require("adm-zip"));
var path_1 = __importDefault(require("path"));
var UnZip = /** @class */ (function () {
    function UnZip() {
    }
    UnZip.prototype.extractZip = function (zipPath, outPath) {
        var nameFile = path_1.default.parse(zipPath).name;
        var zip = new adm_zip_1.default(zipPath);
        var zipEntries = zip.getEntries();
        zip.extractAllTo(outPath, true);
    };
    return UnZip;
}());
exports.default = UnZip;
//# sourceMappingURL=unzip.js.map