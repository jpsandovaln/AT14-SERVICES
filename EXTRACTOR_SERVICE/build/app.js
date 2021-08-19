"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const corsOptions = { origin: "http://localhost:8080" };
const port = 3000;
const app = express_1.default();
class App {
    constructor() {
        this.setConfigs();
        this.init(port);
        //this.test();
    }
    init(port) {
        app.listen(port, () => {
            console.log("Running at http://localhost:" + port);
        });
    }
    setConfigs() {
        app.use(cors_1.default(corsOptions));
        app.use(express_1.default.urlencoded({ extended: true }));
        new routes_1.Routes(app);
    }
}
new App();
