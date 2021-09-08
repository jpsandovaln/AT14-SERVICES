"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_config_1 = require("./src/config/app.config");
const routes_1 = require("./src/routes");
const connection_1 = require("./src/model/db/connection");
class App extends app_config_1.AppConfig {
    constructor() {
        super();
        this.initApp();
        new connection_1.Connection();
        new routes_1.Routes(this.app);
    }
    initApp() {
        this.app.listen(this.port, () => {
            console.log("Running at: " + this.root + ":" + this.port);
        });
    }
}
new App();
