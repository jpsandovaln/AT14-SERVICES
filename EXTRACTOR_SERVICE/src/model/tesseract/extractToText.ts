import { IBase } from "./interfaces/iBase";
import { Extractor } from "./extractor";
import { TextToImageException } from "../../common/exception/textToImageException";

export class ExtractToText extends Extractor {
	constructor(properties: IBase) {
		super(properties);
	}

	public async extract(): Promise<Text> {
		try {
			await this.loadWorker();
			const {
				data: { text },
			} = await this.worker.recognize(this.path);
			await this.worker.terminate();
			return text;
		} catch (error) {
			throw new TextToImageException(
				error,
				"500-Internal Server Error",
				"EXTRACTOR-ERROR-06"
			);
		}
	}
}
