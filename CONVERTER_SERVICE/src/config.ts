import { IConfig } from "./config.interface";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";

export abstract class Config implements IConfig {
    corsOptions = { origin: "http://localhost:8080" };
    port = process.env.PORT;
    root = process.env.ROOT;
    db = process.env.DB;
    app = express();

    constructor() {
        dotenv.config();
        this.app.use(cors(this.corsOptions));
        this.app.use(express.urlencoded({ extended: true }));
    }
}
