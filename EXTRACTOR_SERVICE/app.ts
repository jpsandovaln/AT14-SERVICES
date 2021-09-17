import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { Routes } from "./src/routes";

dotenv.config();

const corsOptions: Object = {
    origin: "*"
};
const port: string | undefined = process.env.EXTRACTOR_PORT;
const app = express();

class App {
    constructor() {
        this.setConfigs();
        this.init(port);
    }

    init(port: string | undefined): void {
        app.listen(port, (): void => {
            console.log("Running at http://localhost:" + port);
        });
    }

    setConfigs(): void {
        app.use(cors(corsOptions));
        app.use(express.urlencoded({ extended: true }));
        new Routes(app);
    }
}

new App();
