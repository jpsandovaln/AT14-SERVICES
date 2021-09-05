const cors = require("cors");
const express = require("express");
const Routes = require("./src/routes");
const app = express();
const mongoose = require('mongoose');
require("dotenv").config();

conexionString = 'mongodb://' + process.env.IP_MONGO + ':27018/converterDB';

mongoose.connect(conexionString,{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(db => console.log('Db is connected to', db.connection.host))
    .catch(err=> console.error(err));

global.__basedir = __dirname;

class Index {
    constructor(
        corsOptions = { origin: ["http://localhost:8080","http://localhost:4000","http://localhost:8081"] },
        port = process.env.PORT_CONVERTER
    ) {
        app.use(cors(corsOptions));
        app.use(express.json());
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
