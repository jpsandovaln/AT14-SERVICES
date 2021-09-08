"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Connection = void 0;
const connection_config_1 = require("../../config/connection.config");
class Connection extends connection_config_1.ConnectionConfig {
    constructor() {
        super();
    }
}
exports.Connection = Connection;
