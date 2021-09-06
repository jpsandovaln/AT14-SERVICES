import cors from 'cors';
import express from 'express';
import Routes from './routers/compile_routers';
import * as dotenv from "dotenv";

dotenv.config({ path:  './.env' });

const corsOptions: Object = { 
    origin: process.env.COMPILER_APP + ":" + process.env.COMPILER_PORT
};
const port: string | undefined = process.env.COMPILER_PORT;
const app = express();

class App {
    constructor() {
        this.setConfigs();
        this.init(port);
    }

    private init(port: string | undefined): void {
        app.listen(port, (): void => {
            console.log("Running at http://localhost:" + port);
        });
    }

    private setConfigs(): void {
        app.use(cors(corsOptions));
        app.use(express.urlencoded({ extended: true }));
        new Routes(app);
    }
}

new App();
