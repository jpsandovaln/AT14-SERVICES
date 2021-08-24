import { FileController } from "../controller/file.controller";
import express from "express";

const controller = new FileController();

const router = express.Router();

class Routes {
    constructor(app = express()) {
        router.get("/upload", controller.upload);
        app.use(router);
    }
}
export { Routes };
