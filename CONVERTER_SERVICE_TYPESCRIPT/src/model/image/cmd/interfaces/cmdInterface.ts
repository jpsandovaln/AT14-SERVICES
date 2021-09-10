import { Parameters } from "../../../common/parameter/parameters";
import { Command } from "../../../audio/cmd/cmd";

export interface ICommand {
    parameters: Parameters;
    getParameter(key: string | undefined): string | undefined;
    getParameters(): Parameters;
    setNextCommand(command: Command | undefined): void;
    returnCommand(command: string): string;
}
