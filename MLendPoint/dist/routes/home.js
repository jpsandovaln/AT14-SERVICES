"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class HomePage {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this.router.get("/", (req, res) => {
            res.send("I'm home");
        });
    }
}
const homePage = new HomePage();
homePage.routes();
exports.default = homePage.router;
