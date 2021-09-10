import { Parameters } from "../../../common/parameter/parameters";

export interface IBuildCmd {
    params: Parameters;
    getParameters(): Parameters;
    getParameter(key: string | undefined): string | undefined;
    returnCmd(): string;
}
