import express from "express";

const router = express.Router();
export abstract class Routes {
    app: any;
    constructor(app = express()) {
        this.app = app;        
    }

    abstract getRoutes():void;        
}
