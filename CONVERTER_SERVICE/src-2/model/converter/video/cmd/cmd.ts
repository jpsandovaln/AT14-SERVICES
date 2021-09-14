import { Parameters } from "../parameter/parameters";

export abstract class Command {
    
    public parameters: Parameters;
    
    constructor(parameters: Parameters) {
        this.parameters = parameters;
    }

    public getParameter(key: string): string {
        return this.parameters.getParameter(key);
    };

    public getParameters(): Parameters {
        return this.parameters;
    };

    abstract setNextCommand(command: Command | undefined):void;

    abstract returnCommand(command: string): string;
}
