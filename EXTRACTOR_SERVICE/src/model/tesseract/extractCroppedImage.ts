import { ICropped } from "./interfaces/iCropped";
import { Extractor } from "./extractor";
import { CroppedImageException } from "../../common/exception/croppedImageException";

export class ExtractCroppedImage extends Extractor {
	private rectangle: object;

	constructor(properties: ICropped) {
		super(properties);
		this.rectangle = properties.rectangle;
	}

	public async extract(): Promise<string> {
		this.validateParameter();
		try {
			const rectangle = this.rectangle;
			await this.loadWorker();
			const {
				data: { text },
			} = await this.worker.recognize(this.path, { rectangle });
			return text;
		} catch (error) {
			throw new CroppedImageException(
				error,
				"500",
				"EXTRACTOR-ERROR-04"
			);
		}
	}
}
