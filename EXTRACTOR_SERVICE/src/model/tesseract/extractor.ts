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
		await this.worker.load();
		await this.worker.loadLanguage(this.language);
		await this.worker.initialize(this.language);
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
