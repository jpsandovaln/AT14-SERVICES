import { ServerException } from "../../common/exception/serverException";
import { EmptyValidation } from "../../common/validation/emptyValidation";
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
	protected async loadWorker(): Promise<void> {
		try {
			await this.worker.load();
			await this.worker.loadLanguage(this.language);
			await this.worker.initialize(this.language);
		} catch (error) {
			console.log('test euaoe')
			throw new ServerException(error, 'test', 'test');
		}
	}

	protected validateParameter(): any {
		const emptyParameter = [
			new EmptyValidation("Path", this.path),
			new EmptyValidation("Language", this.language),
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
