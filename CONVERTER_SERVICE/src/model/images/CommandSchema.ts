export class CommandSchema {
    private id: string;
    private command: string;

    constructor(id: string, command: string) {
        this.id = id;
        this.command = command;
    }

    public getId() {
        return this.id;
    }
    public setId(id: string) {
        this.id = id;
    }

    public getCommand() {
        return this.command;
    }
    public setCommand(command: string) {
        this.command = command;
    }
}
