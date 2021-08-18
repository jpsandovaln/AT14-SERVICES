"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_controller_1 = require("../controller/test.controller");
const testController = new test_controller_1.TestController();
class Test {
    constructor(message) {
        testController.test(message);
    }
}
new Test("this is a test");
