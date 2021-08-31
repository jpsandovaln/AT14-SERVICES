import { Request, Response, Router } from "express";

class HomePage {
    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }
    routes() {
        this.router.get("/", (req: Request, res: Response) => {
            res.send("I'm home");
        });
    }
}
const homeRouter = new HomePage();
homeRouter.routes();

export default homeRouter.router;
