class CommandSchema {

    constructor(id = '', command = '') {

        this.id = id;
        this.command = command;
    }

    //get and set the id

    getId() {

        return this.id;
    }
    setId(id) {

        this.id = id;
    }

    //get and set the command

    getCommand() {

        return this.command;
    }
    setCommand(command) {

        this.command = command;
    }
}

module.exports = CommandSchema;
