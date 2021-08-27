"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var home_1 = __importDefault(require("./routes/home"));
var analizeZip_1 = __importDefault(require("./routes/analizeZip"));
var analizeImages_1 = __importDefault(require("./routes/analizeImages"));
var about_1 = __importDefault(require("./routes/about"));
var cors_1 = __importDefault(require("cors"));
var app = express_1.default();
app.use(cors_1.default());
var port = process.env.PORT || 8080;
app.use(express_1.default.static(path_1.default.join(__dirname, "../public")));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use("/", home_1.default);
app.use("/analizeZip", analizeZip_1.default);
app.use("/analizeImages", analizeImages_1.default);
app.use("/about", about_1.default);
app.listen(port, function () {
    console.log("Example app listening at http://localhost:" + port);
});
//# sourceMappingURL=app.js.map