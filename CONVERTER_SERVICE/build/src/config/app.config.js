"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppConfig = void 0;
const config_1 = require("./config");
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
class AppConfig extends config_1.Config {
    constructor() {
        super();
        this.corsOptions = { origin: "http://localhost:8080" };
        this.port = process.env.PORT_CONVERTER;
        this.root = process.env.BASE_URL_CONVERTER;
        this.app = express_1.default();
        this.initAppConfigs();
    }
    initAppConfigs() {
        this.app.use(cors_1.default(this.corsOptions));
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
}
exports.AppConfig = AppConfig;
