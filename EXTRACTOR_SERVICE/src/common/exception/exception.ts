import { Message } from "./message";

export class Exception {
    private message: Message;
    constructor(message: Message) {
        this.message = message;
    }

    public getMessage() : Message {
        return this.message;
    }
}
