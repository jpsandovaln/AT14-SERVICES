export class ExternalLibrary {
    private _addFile: string;

    constructor() {
        this._addFile = "";
    }

    addFile(file: string): ExternalLibrary {
        this._addFile = file;
        return this;
    }

    execute(): string {
        console.info(this._addFile);
        return 'cshard compiler';
    }
}
