/* eslint-disable @typescript-eslint/ban-types */
import { ICropped } from "./interfaces/iCropped";
import { Extractor } from "./extractor";
import { CroppedImageException } from "../../common/exception/croppedImageException";
import { EmptyValidation } from "../../common/validation/emptyValidation";

export class ExtractCroppedImage extends Extractor {
	private rectangle: object;

	constructor(properties: ICropped) {
		super(properties);
		this.rectangle = properties.rectangle;
	}

	// public async extract(): Promise<Text> {
	// 	const rectangle = this.rectangle;
	// 	await this.loadWorker();
	// 	const {
	// 		data: { text },
	// 	} = await this.worker
	// 		.recognize(this.path, { rectangle })
	// 		.catch((error: any) => {
	// 			throw new CroppedImageException(error, 'test-', 'oeu');
	// 		});
	// 	await this.worker.terminate();
	// 	return text;
	// }
	public validate(): any {
		const emptyParameter = [
			new EmptyValidation("Path", this.path),
			new EmptyValidation("Language", this.language),
		];
		emptyParameter.forEach(validation => {
			validation.validate();
		})
	}

	public async extract(): Promise<Text> {
		this.validate();
		try {
			const rectangle = this.rectangle;
			await this.loadWorker();
			const {
				data: { text },
			} = await this.worker.recognize(this.path, { rectangle });
			await this.worker.terminate();
			return text;
		} catch (error) {
			throw new CroppedImageException(error, "test-", "oeu");
		}
	}
}
