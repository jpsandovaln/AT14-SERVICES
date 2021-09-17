import { IBase } from "./interfaces/iBase";
import { Extractor } from "./extractor";
import { TextToImageException } from "../../common/exception/textToImageException";
import { StatusCode } from "../../common/statusCode";
import { Code } from "../../common/code";

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
		} catch (error: any) {
			throw new TextToImageException(
				error.message,
				StatusCode.InternalServerError,
				Code.EXTRACTOR_ERROR_06
			);
		}
	}
}
