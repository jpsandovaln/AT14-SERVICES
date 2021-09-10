import { Logger } from "winston";

export interface IApp {
    logger: Logger;
    port: string | undefined;
    corsOptions: object;
}
