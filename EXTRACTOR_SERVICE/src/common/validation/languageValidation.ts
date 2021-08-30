import { ExtractorException } from "../exception/extractorException";
import { languages } from "../langCode";
import { ValidateStrategy } from "./validateStrategy";

export class LanguageValidation extends ValidateStrategy {
	private _language: string;
	constructor(language: string) {
		super();
		this._language = language;
	}

	validate() {
		const codeLanguage = Object.keys(languages);
		if (!codeLanguage.find(language => language === this._language)) {
			throw new ExtractorException(
				"Invalid Language code: " + this._language,
				"400 - Bad Request",
				"EXTRACTOR-ERROR-02"
			);
		}
	}
}
