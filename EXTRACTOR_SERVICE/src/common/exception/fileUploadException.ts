import { Code } from "../code";
import { StatusCode } from "../statusCode";

export class FileUploadException extends Error {
    private _status: StatusCode;
    private _code: Code;

	constructor(message: any, status: StatusCode, code: Code) {
		super(message);
        this._status = status;
        this._code = code;
	}

    get status(): StatusCode {
        return this._status;
    }

    get code(): Code{
        return this._code;
    }
}
