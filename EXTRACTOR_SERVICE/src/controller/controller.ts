import express from "express";

class Controller {
    params: Object;

    constructor(params: Object) {
        this.params = params;
    }
    test = (req: express.Request, res: express.Response): void => {
        res.json(this.params);
    };
}

export { Controller };
