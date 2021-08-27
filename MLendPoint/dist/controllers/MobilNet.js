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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mobilenet_1 = __importDefault(require("@tensorflow-models/mobilenet"));
var tfjs_node_1 = __importDefault(require("@tensorflow/tfjs-node"));
var MachineLearing_1 = __importDefault(require("./MachineLearing"));
var fs_1 = __importDefault(require("fs"));
/**
 * @Class
 * Build an instance from Machine Learning
 *
 */
var MobilNet = /** @class */ (function (_super) {
    __extends(MobilNet, _super);
    /**
     * @param {string} imagePath The path where image is.
     * @param {string} searchWord The word to search.
     * @param {number} percentage Percentage of probability to search.
     */
    function MobilNet(image, searchWord, percentage) {
        return _super.call(this, image, searchWord, percentage) || this;
    }
    MobilNet.prototype.loadmodel = function () {
        return __awaiter(this, void 0, void 0, function () {
            var image, tfimage, model, predictions;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        image = fs_1.default.readFileSync(this.image);
                        tfimage = tfjs_node_1.default.node.decodeImage(image);
                        return [4 /*yield*/, mobilenet_1.default.load()];
                    case 1:
                        model = _a.sent();
                        return [4 /*yield*/, model.classify(tfimage)];
                    case 2:
                        predictions = _a.sent();
                        return [2 /*return*/, predictions];
                }
            });
        });
    };
    MobilNet.prototype.getJSON = function () {
        return __awaiter(this, void 0, void 0, function () {
            var quantity, _a, arr;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        quantity = 0;
                        _a = this;
                        return [4 /*yield*/, this.loadmodel()];
                    case 1:
                        _a.predictions = _b.sent();
                        arr = [];
                        this.predictions.forEach(function (element) {
                            var searchWord = new RegExp(_this.searchWord, "i");
                            if (element.className.search(searchWord) != -1 &&
                                element.probability >= _this.percentage) {
                                quantity = quantity + 1;
                                arr.push(element);
                            }
                        });
                        return [2 /*return*/, this.parse(arr)];
                }
            });
        });
    };
    MobilNet.prototype.parse = function (arr) {
        var arrParse = [];
        arr.forEach(function (element) {
            arrParse.push(element);
        });
        return arrParse;
    };
    return MobilNet;
}(MachineLearing_1.default));
exports.default = MobilNet;
//# sourceMappingURL=MobilNet.js.map