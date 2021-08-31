import { Request, Response, Router } from "express";

class AboutPage {
    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }
    routes() {
        this.router.get("/", (req: Request, res: Response) => {
            res.send("I'm about");
        });
    }
}

const aboutRouter = new AboutPage();
aboutRouter.routes();

export default aboutRouter.router;
