import { CommonRoutesConfig } from "../common/common.routes.config";
import express from "express";

export class FilesRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, "FilesRoutes");
    }

    configureRoutes() {
        this.app
            .route(`/files`)
            .get((req: express.Request, res: express.Response) => {
                res.status(200).send(`List of files`);
            })
            .post((req: express.Request, res: express.Response) => {
                res.status(200).send(req.body);
            });

        this.app
            .route(`/files/:fileId`)
            .all(
                (
                    req: express.Request,
                    res: express.Response,
                    next: express.NextFunction
                ) => {
                    // This middleware function runs before any request to /files/:fileId
                    // It doesn't accomplish anything just yet---it simply passes control to the next applicable function below using next()
                    next();
                }
            )
            .get((req: express.Request, res: express.Response) => {
                res.status(200).send(
                    `GET requested for id ${req.params.fileId}`
                );
            })
            .put((req: express.Request, res: express.Response) => {
                res.status(200).send(
                    `Put requested for id ${req.params.fileId}`
                );
            })
            .patch((req: express.Request, res: express.Response) => {
                res.status(200).send(
                    `Patch requested for id ${req.params.fileId}`
                );
            })
            .delete((req: express.Request, res: express.Response) => {
                res.status(200).send(
                    `Delete requested for id ${req.params.fileId}`
                );
            });

        return this.app;
    }
}
