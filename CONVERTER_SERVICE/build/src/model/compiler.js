"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Compiler = void 0;
const child_process_1 = require("child_process");
class Compiler {
    constructor() { }
    execute(command) {
        return new Promise(function (resolve, reject) {
            child_process_1.exec(command, (err, stdout, stderr) => {
                if (err) {
                    reject(err);
                }
                resolve({ success: true });
            });
        });
    }
}
exports.Compiler = Compiler;
