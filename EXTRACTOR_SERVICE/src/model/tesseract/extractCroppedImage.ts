import { ICropped } from "./interfaces/iCropped";
import { Extractor } from "./extractor";
import { CroppedImageException } from "../../common/exception/croppedImageException";
import { Cropped } from "./interfaces/Cropped";
import { StatusCode } from "../../common/statusCode";
import { Code } from "../../common/code";

export class ExtractCroppedImage extends Extractor {
	private rectangle: Cropped;

	constructor(properties: ICropped) {
		super(properties);
		this.rectangle = properties.rectangle;
	}

	public async extract(): Promise<string> {
		this.validateParameter();
		try {
			//this.rectangle.validate();
			const rectangle = this.rectangle;
			await this.loadWorker();
			const {
				data: { text },
			} = await this.worker.recognize(this.path, { rectangle });
			return text;
		} catch (error) {
			throw new CroppedImageException(
				error,
				StatusCode.InternalServerError,
				Code.EXTRACTOR_ERROR_04
			);
		}
	}
}
