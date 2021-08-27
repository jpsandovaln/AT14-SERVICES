/* eslint-disable @typescript-eslint/ban-types */
import { ICropped } from "./interfaces/iCropped";
import { Extractor } from "./extractor";
import { CroppedImageException } from "../../common/exception/croppedImageException";
import { Message } from "../../common/exception/message";
import { ExceptionType } from "../../common/exception/exceptionType";

export class ExtractCroppedImage extends Extractor {
	private rectangle: object;

	constructor(properties: ICropped) {
		super(properties);
		this.rectangle = properties.rectangle;
	}

	public async extract(): Promise<Text> {
		const rectangle = this.rectangle;
		await this.loadWorker();
		const {
			data: { text },
		} = await this.worker
			.recognize(this.path, { rectangle })
			.catch((error: any) => {
				console.log(error);
				throw new CroppedImageException(error, 'test-', 'oeu');
			});
		await this.worker.terminate();
		return text;
	}
}
