import CompilerController from "../controller/compiler_controller";
import express from 'express';
import multer from 'multer';
import * as fs from 'fs';

export default class Routes {

    private router: any;
    private controller: CompilerController;
    private app: any;

    constructor(app = express()) {
        this.app = app;
        this.controller = new CompilerController();
        this.router = express.Router();
        this.settingRouters();
    }

    private settingRouters() : void {
        this.router.post("/compiler", this.getMulter().single('file'), this.controller.compileCode);
        this.app.use(this.router);
    }

    private getMulter() {
        const storage = multer.diskStorage({
            destination: (req, file, cb) => {
                const path = './upload/';
                fs.mkdirSync(path, { recursive: true});
                cb(null, path);
            },
            filename: (req, file, cb) => {
                cb(null, file.originalname);
            } 
        });
        return multer({ storage: storage });
    }
}
