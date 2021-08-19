"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const controller_1 = require("../controller/controller");
const express_1 = __importDefault(require("express"));
const controller = new controller_1.Controller();
const router = express_1.default.Router();
class Routes {
    constructor(app = express_1.default()) {
        router.get("/", controller.test);
        app.use(router);
    }
}
exports.Routes = Routes;
