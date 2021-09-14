import { Parameters } from "../../common/parameter/parameters";
import { IBuildCmd } from "./interfaces/buildCmdInterface";

export abstract class BuildCmd implements IBuildCmd {
    public params;
    constructor(params: Parameters) {
        this.params = params;
    }

    public getParameters() {
        return this.params;
    }

    public getParameter(key: string | undefined) {
        if (key != undefined) return this.params.getParameter(key);
        else return undefined;
    }

    abstract returnCmd(): string;
}
