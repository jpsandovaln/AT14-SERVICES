import { Code } from "../code";
import { ExtractorException } from "../exception/extractorException";
import { languages } from "../langCode";
import { StatusCode } from "../statusCode";
import { ValidateStrategy } from "./validateStrategy";

export class LanguageValidation extends ValidateStrategy {
	private _language: string;
	constructor(language: string) {
		super();
		this._language = language;
	}

	validate(): void {
		const codeLanguage = Object.keys(languages);
		if (!codeLanguage.find(language => language === this._language)) {
			throw new ExtractorException(
				"Invalid Language code: " + this._language,
				StatusCode.BadRequest,
				Code.EXTRACTOR_ERROR_02
			);
		}
	}
}
