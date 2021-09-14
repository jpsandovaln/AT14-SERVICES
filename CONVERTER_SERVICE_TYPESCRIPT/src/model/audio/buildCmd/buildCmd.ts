import { Parameters } from "../../common/parameter/parameters";

export abstract class BuildCmd {
    public params: Parameters;
    constructor(params: Parameters) {
        this.params = params;
    }

    public getParameters(): Parameters {
        return this.params;
    }

    public getParameter(key: string | undefined): string | undefined{        
        if(key != undefined)
            return this.params.getParameter(key);
        else
            return undefined;
    };

    abstract returnCmd(): string;
}