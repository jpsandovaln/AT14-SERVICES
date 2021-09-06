"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path = __importStar(require("path"));
const home_1 = __importDefault(require("./routes/home"));
const analizeZip_1 = __importDefault(require("./routes/analizeZip"));
const analizeImages_1 = __importDefault(require("./routes/analizeImages"));
const about_1 = __importDefault(require("./routes/about"));
const cors_1 = __importDefault(require("cors"));
const createFolders_1 = __importDefault(require("./createFolders"));
const createfolders = new createFolders_1.default();
createfolders.createFolders();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const port = process.env.PORT || 8085;
app.use(express_1.default.static(path.join(__dirname, "../public")));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use("/", home_1.default);
app.use("/analizeZip", analizeZip_1.default);
app.use("/analizeImages", analizeImages_1.default);
app.use("/about", about_1.default);
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
