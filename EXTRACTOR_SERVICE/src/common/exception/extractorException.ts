import { Exception } from "./exception";
import { Message } from "./message";

export class ExtractorException extends Exception{
    constructor(message: Message){
        super(message);
    }
}
