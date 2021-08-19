"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
class Controller {
    constructor() {
        this.test = (req, res) => {
            res.json({ params: "testing purposes" });
        };
    }
}
exports.Controller = Controller;
