import { IImage } from "./interfaces/iImage";
import { Tesseract } from "./tesseractBase";

export class ImageToTextBySize extends Tesseract {
  private worker: any;
  private language: string;
  private path: string;
  private rectangle: object;

  constructor(properties: IImage) {
    super(properties);
    this.worker = properties.worker;
    this.language = properties.language;
    this.path = properties.path;
    this.rectangle = properties.rectangle;
  }

  public async loadWorker(): Promise<void> {
    await this.worker.load();
    await this.worker.loadLanguage(this.language);
    await this.worker.initialize(this.language);
  }

  public async getText(): Promise<Text> {
    const rectangle = this.rectangle;
    await this.loadWorker();
    const {
      data: { text },
    } = await this.worker.recognize(this.path, { rectangle });
    await this.worker.terminate();
    return text;
  }
}
