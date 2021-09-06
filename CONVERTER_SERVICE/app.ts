import { AppConfig } from "./src/config/app.config";
import { Routes } from "./src/routes";
import { Connection } from "./src/model/db/connection";

import Logger from "./src/utilities/logger";
class App extends AppConfig {
    constructor() {
        super();
        this.initApp();
        //new Connection();
        //new Routes(this.app);
    }

    private initApp() {
        this.app.listen(this.port, (): void => {
            Logger.debug("Running at: " + this.root + ":" + this.port);
        });
    }
}

new App();
