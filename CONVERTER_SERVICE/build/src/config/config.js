"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
class Config {
    constructor() {
        this.initEnv();
        this.execute();
    }
    initEnv() {
        dotenv_1.default.config();
    }
    execute() { }
}
exports.Config = Config;
