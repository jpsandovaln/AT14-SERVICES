import { TestController } from "../controller/test.controller";

const testController = new TestController();

class Test {
    constructor(message: string) {
        testController.test(message);
    }
}
new Test("this is a test");
