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
			return text;
		} catch (error) {
			throw new TextToImageException(
				error,
				"500",
				"EXTRACTOR-ERROR-06"
			);
		}
	}
}
