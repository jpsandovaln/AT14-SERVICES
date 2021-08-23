import { IImage } from "./interfaces/iImage";
import { Extractor } from "./extractor";

export class ImageToTextBySize extends Extractor {
  private rectangle: object;

  constructor(properties: IImage) {
    super(properties);
    this.rectangle = properties.rectangle;
  }

  public async extract(): Promise<Text> {
    const rectangle = this.rectangle;
    await this.loadWorker();
    const {
      data: { text },
    } = await this.worker.recognize(this.path, { rectangle });
    await this.worker.terminate();
    return text;
  }
}
