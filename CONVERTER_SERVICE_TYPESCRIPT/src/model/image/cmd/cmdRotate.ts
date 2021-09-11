import { Parameters } from "../../common/parameter/parameters";
import { Limits } from "./validations/limits";
import { Types } from "./validations/tpyes";
import { Command } from "./cmd";

export class CmdRotate extends Command {
    private MAGICK_ROTATE = "-rotate";
    private SPACE = " ";
    private cmd!: Command;
    private limit;
    private type;

    constructor(parameters: Parameters) {
        super(parameters);
        this.limit = new Limits(1, 360);
        this.type = new Types();
    }

    setNextCommand(command: Command): void {
        this.cmd = command;
    }

    isValid(value: string | undefined) {
        if (this.type.isNumber(value)) {
            return this.limit.isValid(value) ? true : false;
        }
    }

    returnCommand(command: string): string {
        let parameter = this.getParameter("rotate");
        if (this.isValid(parameter))
            command =
                command +
                this.SPACE +
                this.MAGICK_ROTATE +
                this.SPACE +
                parameter +
                this.SPACE;
        return this.cmd.returnCommand(command);
    }
}
/*let params = new Parameters({ audioFormat: ".jpg", rotate: false });
let cmd = new CmdRotate(params);
console.log(cmd.returnCommand("anterior"));*/
