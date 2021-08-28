"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const home_1 = __importDefault(require("./routes/home"));
const analizeZip_1 = __importDefault(require("./routes/analizeZip"));
const analizeImages_1 = __importDefault(require("./routes/analizeImages"));
const about_1 = __importDefault(require("./routes/about"));
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
app.use(cors_1.default());
const port = process.env.PORT || 8080;
app.use(express_1.default.static(path_1.default.join(__dirname, "../public")));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use("/", home_1.default);
app.use("/analizeZip", analizeZip_1.default);
app.use("/analizeImages", analizeImages_1.default);
app.use("/about", about_1.default);
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
