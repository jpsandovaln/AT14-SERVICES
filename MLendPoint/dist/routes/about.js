"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class AboutPage {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this.router.get("/", (req, res) => {
            res.send("I'm about");
        });
    }
}
const aboutRouter = new AboutPage();
aboutRouter.routes();
exports.default = aboutRouter.router;
