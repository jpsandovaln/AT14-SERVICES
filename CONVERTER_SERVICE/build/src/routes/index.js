"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const file_controller_1 = require("../controller/file.controller");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
class Routes {
    constructor(app = express_1.default()) {
        router.post("/upload", new file_controller_1.FileController().upload);
        app.use(router);
    }
}
exports.Routes = Routes;
