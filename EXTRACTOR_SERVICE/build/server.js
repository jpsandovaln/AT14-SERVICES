"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const corsOptions = { origin: "http://localhost:8081" };
const port = 8080;
const app = express_1.default();
class Server {
    constructor() {
        this.setConfigs();
        this.init(port);
        //this.test();
    }
    init(port) {
        app.listen(port, () => {
            this.print("Running at http://localhost:" + port);
        });
    }
    setConfigs() {
        app.use(cors_1.default(corsOptions));
        app.use(express_1.default.urlencoded({ extended: true }));
        new routes_1.Routes(app);
    }
    /*test(): void {
        app.get("/", (req: Request, res: Response): void => {
            res.json({ message: "testing purposes" });
        });
    }*/
    print(string) {
        console.log(string);
    }
}
new Server();
