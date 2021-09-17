import { FileController } from "../controller/file.controller";
import express from "express";
import { DownloadFile } from "../controller/downloadFile";
import cors from "cors";

const controller = new FileController();
const downloadFile = new DownloadFile();
const router = express.Router();

class Routes {
    constructor(app = express()) {
        router.post("/upload", controller.extractText);
        router.post("/extractToPDF", controller.extractToPDF);
        router.get("/extractToPDF/:name", downloadFile.downloadPDF);
        router.post("/extractCroppedImage", controller.extractCroppedImage);
        app.use(cors());
        app.use(router);
    }
}
export { Routes };
