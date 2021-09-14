import { Parameters } from "../parameter/parameters";

export abstract class BuildCmd {
    public params: Parameters;
    constructor(params: Parameters) {
        this.params = params;
    }

    public getParameters(): Parameters {
        return this.params;
    }

    public getParameter(key: string): string {        
        return this.params.getParameter(key);
    };

    abstract returnCmd(): string;
}