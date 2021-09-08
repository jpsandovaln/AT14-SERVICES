"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandSchema = void 0;
class CommandSchema {
    constructor(id, command) {
        this.id = id;
        this.command = command;
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    getCommand() {
        return this.command;
    }
    setCommand(command) {
        this.command = command;
    }
}
exports.CommandSchema = CommandSchema;
