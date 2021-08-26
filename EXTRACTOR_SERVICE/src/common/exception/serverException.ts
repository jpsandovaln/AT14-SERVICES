import { Exception } from "./exception";
import { Message } from "./message";

export class ServerException extends Exception{
    constructor(message: Message){
        super(message);
    }
}
