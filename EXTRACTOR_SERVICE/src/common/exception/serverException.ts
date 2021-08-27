import { ExtractorException } from "./extractorException";
import { Message } from "./message";

export class ServerException extends ExtractorException{
    constructor(message: any, status: string, code:string){
        super(message, status, code);
    }
}
