"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
class Command {
    constructor(id, value) {
        this.id = id;
        this.value = value;
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    getValue() {
        return this.value;
    }
    setValue(value) {
        this.value = value;
    }
}
exports.Command = Command;
