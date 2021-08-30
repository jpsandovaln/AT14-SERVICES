export interface IConfig {
    corsOptions: object;
    port: string | undefined;
    root: string | undefined;
    db: string | undefined;
    app: Express.Application;
}
