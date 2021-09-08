"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectionConfig = void 0;
const config_1 = require("./config");
const mongoose_1 = __importDefault(require("mongoose"));
class ConnectionConfig extends config_1.Config {
    constructor() {
        super();
        this.dbConnection = process.env.DB_CONNECTION;
        this.initConnection();
    }
    initConnection() {
        mongoose_1.default
            .connect(this.dbConnection + "", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
            .then((db) => console.log("Db is connected to", db.connection.host))
            .catch((err) => console.error(err));
    }
}
exports.ConnectionConfig = ConnectionConfig;
