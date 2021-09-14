import { Parameters } from "../../common/parameter/parameters";
import { ICommand } from "./interfaces/cmdInterface";

export abstract class Command implements ICommand {
    public parameters;

    constructor(parameters: Parameters) {
        this.parameters = parameters;
    }

    public getParameter(key: string) {
        if (key != undefined) return this.parameters.getParameter(key);
        else return undefined;
    }

    public getParameters() {
        return this.parameters;
    }

    abstract setNextCommand(command: Command | undefined): void;

    abstract returnCommand(command: string): string;
}
