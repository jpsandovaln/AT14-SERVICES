"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
const express_1 = require("express");
class Controller {
    test(object) {
        return express_1.json(object);
    }
    print() {
        console.log("testing purposes");
    }
}
exports.Controller = Controller;
