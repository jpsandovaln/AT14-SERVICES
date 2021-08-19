import express from "express";

class Controller {
    test = (req: express.Request, res: express.Response): void => {
        res.json({ params: "testing purposes" });
    };
}

export { Controller };
