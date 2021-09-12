import { Parameters } from "../../common/parameter/parameters";
export abstract class Command {
    public parameters: Parameters;

    constructor(parameters: Parameters) {
        this.parameters = parameters;
    }

    public getParameter(key: string): string | undefined {
        if (key != undefined)
            return this.parameters.getParameter(key);
        else
            return undefined;
    };

    public getParameters(): Parameters {
        return this.parameters;
    };

    abstract setNextCommand(command: Command | undefined): void;

    abstract returnCommand(command: string): string;
}
