export class ExtractorException extends Error {
	private _status: string;
	private _code: string;

	constructor(message: any, status: string, code: string) {
		super(message);
		this._status = status;
		this._code = code;
	}

	get status(): string  {
		return this._status;
	}

	get code(): string  {
		return this._code;
	}
}
