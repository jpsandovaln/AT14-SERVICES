import { FileController } from "../controller/file.controller";
import express from "express";

const router = express.Router();

class Routes {
    constructor(app = express()) {
        router.post("/upload", new FileController().upload);
        app.use(router);
    }
}
export { Routes };
