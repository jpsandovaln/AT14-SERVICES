export abstract class Upload{
    abstract uploadFile(req: any, res: any, next: any): Promise<any>;
}
