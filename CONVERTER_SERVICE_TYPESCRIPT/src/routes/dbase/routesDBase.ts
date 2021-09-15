import express from "express";
import { DBaseController } from "../../controller/dbase/dBaseController";
import { Routes } from "../routes";
const router = express.Router();
import cors from "cors";

export class RoutesDBase extends Routes {
    constructor(app = express()) {
        super(app);
    }

    async getRoutes(): Promise<void> {
        router.get("/file", new DBaseController().DBaseFiles);
        router.delete("/file/:id", new DBaseController().DBaseDeleteById);
        router.get("/file/:id", new DBaseController().DBaseVerifyId);
        this.app.use(router);
        this.app.use(cors());
    }
}
