import { Config } from "./src/config";
import { Routes } from "./src/routes";
import { Connection } from "./src/model/db/connection";

class App extends Config {
    constructor() {
        super();
        this.init();
        new Connection();
        new Routes(this.app);
    }

    init(): void {
        this.app.listen(this.port, (): void => {
            console.log("Running at: " + this.root + this.port);
        });
    }
}

new App();
