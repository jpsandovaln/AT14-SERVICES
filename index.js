const cors = require("cors");
const express = require("express");
const routes = require("./src/routes");
const app = express();

global.__basedir = __dirname;

class Index {

  constructor(corsOptions = { origin: "http://localhost:8081"}, port = 8080){

    app.use(cors(corsOptions));
    app.use(express.urlencoded({ extended: true }));
    routes(app);
    this.init(port);
  }

  init(port){

    app.listen(port, () =>{
      this.print('Running at localhost:'+port);
    });
  }

  print(string){ console.log(string); }
}

new Index();
