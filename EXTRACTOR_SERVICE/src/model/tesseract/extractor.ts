import { Code } from "../../common/code";
import { LoadWorkerException } from "../../common/exception/loadWorkerException";
import { StatusCode } from "../../common/statusCode";
import { EmptyValidation } from "../../common/validation/emptyValidation";
import { LanguageValidation } from "../../common/validation/languageValidation";
import { PathValidation } from "../../common/validation/pathValidation";
import { IBase } from "./interfaces/iBase";

export abstract class Extractor {
	protected worker: any;
	protected language: string;
	protected path: string;

	constructor(properties: IBase) {
		this.worker = properties.worker;
		this.language = properties.language;
		this.path = properties.path;
	}

	/**
	 * Initialize the Worker to extract text from an image.
	 * @protected method
	 *
	 */
	public async loadWorker(): Promise<void> {
		try {
			this.validateParameter();
			await this.worker.load();
			await this.worker.loadLanguage(this.language);
			await this.worker.initialize(this.language);
		} catch (error) {
			throw new LoadWorkerException(
				error,
				StatusCode.ServerUnavailable,
				Code.EXTRACTOR_ERROR_01
			);
		}
	}

	/**
	 * Validates the parameters and if they aren't correct it
	 * will throw an custom error.
	 * @protected method
	 *
	 */
	public validateParameter(): void {
		const emptyParameter = [
			new EmptyValidation("Path", this.path),
			new EmptyValidation("Language", this.language),
			new LanguageValidation(this.language),
			new PathValidation(this.path),
		];
		emptyParameter.forEach((validation) => {
			validation.validate();
		});
	}

	/**
	 * Create the neccessary actions to extract text from an image.
	 * It returns and object or text, according to the method
	 * inside him.
	 * @abstract method
	 *
	 */
	abstract extract(): any;
}
