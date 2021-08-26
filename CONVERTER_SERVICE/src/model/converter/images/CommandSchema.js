class CommandSchema {

    constructor(id = '', command = '') {
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

module.exports = CommandSchema;
