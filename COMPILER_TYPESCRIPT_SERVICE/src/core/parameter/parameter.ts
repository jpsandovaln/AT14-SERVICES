export abstract class Parameter {
    protected _filePath: string;

    constructor(filePath: string) {
        this._filePath = filePath;
    }

    public get filePath() : string {
        return this._filePath;
    }

    public set filePath(value) {
        this._filePath = value;
    }

    abstract validate(): void;
}
