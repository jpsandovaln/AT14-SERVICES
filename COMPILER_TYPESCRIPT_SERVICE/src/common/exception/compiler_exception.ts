export class CompilerException extends Error {
    private _status: number;
    private _code: string;

    constructor(message: string, status: number, code: string) {
        super(message);
        this._status = status;
        this._code = code;
    }

    public get status(): number {
        return this._status;
    }

    public get code(): string {
        return this._code;
    }
}
