export class MachineLearningException extends Error {
	private _status: number;
	private _code: string;

	constructor(message: any, status: number, code: string) {
		super(message);
		this._status = status;
		this._code = code;
	}

	get status(): number  {
		return this._status;
	}

	get code(): string  {
		return this._code;
	}
}
