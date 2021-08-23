import { IImage } from "./interfaces/iImage";
import { Tesseract } from "./tesseractBase";

export class ImageToTextBySize extends Tesseract {
  public worker: any;
  public language: string;
  public path: string;
  public rectangle: object;

  constructor(properties: IImage) {
    super(properties);
    this.worker = properties.worker;
    this.language = properties.language;
    this.path = properties.path;
    this.rectangle = properties.rectangle;
  }

  async loadWorker() {
    await this.worker.load();
    await this.worker.loadLanguage(this.language);
    await this.worker.initialize(this.language);
  }

  public async getText() {
    const rectangle = this.rectangle;
    await this.loadWorker();
    const {
      data: { text },
    } = await this.worker.recognize(this.path, { rectangle });
    await this.worker.terminate();
    return text;
  }
}
