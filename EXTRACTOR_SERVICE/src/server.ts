import cors from "cors";
import express, { Request, Response } from "express";
import { Routes } from "./routes";

const corsOptions: Object = { origin: "http://localhost:8081" };
const port: number = 8080;
const app = express();

class Server {
    constructor() {
        this.setConfigs();
        this.init(port);
        //this.test();
    }

    init(port: number): void {
        app.listen(port, (): void => {
            this.print("Running at http://localhost:" + port);
        });
    }

    setConfigs(): void {
        app.use(cors(corsOptions));
        app.use(express.urlencoded({ extended: true }));
        new Routes(app);
    }

    /*test(): void {
        app.get("/", (req: Request, res: Response): void => {
            res.json({ message: "testing purposes" });
        });
    }*/

    print(string: string): void {
        console.log(string);
    }
}

new Server();
