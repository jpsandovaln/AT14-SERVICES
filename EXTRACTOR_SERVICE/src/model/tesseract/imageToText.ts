import { IBase } from "./interfaces/iBase";
import { Tesseract } from "./tesseractBase";

export class ImageToText extends Tesseract {
  private worker: any;
  private language: string;
  private path: string;

  constructor(properties: IBase) {
    super(properties);
    this.worker = properties.worker;
    this.language = properties.language;
    this.path = properties.path;
  }

  public async loadWorker(): Promise<void> {
    await this.worker.load();
    await this.worker.loadLanguage(this.language);
    await this.worker.initialize(this.language);
  }

  public async getText(): Promise<Text> {
    await this.loadWorker();
    const {
      data: { text },
    } = await this.worker.recognize(this.path);
    await this.worker.terminate();
    return text;
  }
}
