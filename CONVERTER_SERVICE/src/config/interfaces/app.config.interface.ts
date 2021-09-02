export interface IAppConfig {
    corsOptions: object;
    port: string | undefined;
    root: string | undefined;
    app: Express.Application;
    initAppConfigs(): void;
}
