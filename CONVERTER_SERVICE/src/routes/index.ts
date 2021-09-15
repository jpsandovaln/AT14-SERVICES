import { FileController } from "../controller/file.controller";
import express from "express";
import { endPointToConvertPdfToImage, downloadPdfZip } from "../controller/fileConverter";

const router = express.Router();

class Routes {
    constructor(app = express()) {
        router.post("/upload", new FileController().upload);
        router.post("/convertPdftoImage", endPointToConvertPdfToImage);
        router.get("/convertPdftoImage/:name", downloadPdfZip); 
        app.use(router);
    }
}
export { Routes };
