/* eslint-disable @typescript-eslint/ban-types */
import { ICropped } from "./interfaces/iCropped";
import { Extractor } from "./extractor";

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
		} = await this.worker.recognize(this.path, { rectangle });
		//await this.worker.terminate();
		return text;
	}
}
