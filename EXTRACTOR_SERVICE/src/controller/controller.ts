import { json } from "express";

class Controller {
    test(object: Object) {
        return json(object);
    }
    print(): void {
        console.log("testing purposes");
    }
}

export { Controller };
