import { Request, Response, Router } from "express";

class HomePage {
    router: Router;

    constructor() {
        this.router = Router();
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

export default homePage.router;
