import cors from "cors";
import express, { Request, Response } from "express";
import { Routes } from "./routes";

const corsOptions: Object = { origin: "http://localhost:8080" };
const port: number = 3000;
const app = express();

class App {
    constructor() {
        this.setConfigs();
        this.init(port);
    }

    init(port: number): void {
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
