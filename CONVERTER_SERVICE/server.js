const cors = require("cors");
const express = require("express");
const Routes = require("./src/routes");
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27018/converterDB')
    .then(db => console.log('Db is connected to', db.connection.host))
    .catch(err=> console.error(err));

global.__basedir = __dirname;

class Index {
    constructor(
        corsOptions = { origin: "http://localhost:8081" },
        port = 8080
    ) {
        app.use(cors(corsOptions));
        app.use(express.urlencoded({ extended: true }));
        new Routes(app);
        this.init(port);
    }

    init(port) {
        app.listen(port, () => {
            this.print("Running at localhost:" + port);
        });
    }
    print(string) {
        console.log(string);
    }
}

new Index();
