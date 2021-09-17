import { Parameters } from "../../common/parameter/parameters";
import { Command } from "./cmd";

const MAGIC_SIZE = "-size";
const SPACE = " ";
const SIZE_1200 = '1280x720';
const SIZE_854 = '854x480';
const SIZE_640 = '640x360';
const SIZE_426 = '426x240';
const SIZE_256 = '256x144';
export class CmdSize extends Command {
    private cmd!: Command;
    constructor(parameters: Parameters) {
        super(parameters);
    }

    setNextCommand(command: Command): void {
        this.cmd = command;
    };

    isValid(size: string | undefined): boolean {
        if (size != undefined) {
            if (size == SIZE_1200 || size == SIZE_854 || size == SIZE_640 || size == SIZE_426 || size == SIZE_256)
                return true;
            else
                return false;
        }
        return false;
    }

    returnCommand(command: string): string {
        if (this.isValid(this.getParameter('outputSize')))
            command = command + MAGIC_SIZE + SPACE + this.getParameter('outputSize') + SPACE;
        return this.cmd.returnCommand(command);
    };
}
