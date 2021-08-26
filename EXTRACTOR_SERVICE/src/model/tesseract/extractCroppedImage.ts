import { ICropped } from "./interfaces/iCropped";
import { Extractor } from "./extractor";
import { ExtractorException } from "../../common/exception/extractorException";
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
		try {
			await this.loadWorker();
			const {
				data: { text },
			} = await this.worker.recognize(this.path, { rectangle });
			return text;
		} catch (error) {
			const message: Message = {
				message: error,
				exceptionType: ExceptionType.ExtractorException
			};
			throw new ExtractorException(message).getMessage().message;
		}
	}
}
