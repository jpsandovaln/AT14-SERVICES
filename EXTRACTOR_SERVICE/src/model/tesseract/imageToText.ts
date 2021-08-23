import { IBase } from "./interfaces/iBase";
import { Tesseract } from "./tesseractBase";

export class ImageToText extends Tesseract {
  worker: any;
  language: string;
  path: string;

  constructor(properties: IBase) {
    super(properties);
    this.worker = properties.worker;
    this.language = properties.language;
    this.path = properties.path;
  }

  async loadWorker() {
    await this.worker.load();
    await this.worker.loadLanguage(this.language);
    await this.worker.initialize(this.language);
  }

  public async getText() {
    await this.loadWorker();
    const {
      data: { text },
    } = await this.worker.recognize(this.path);
    await this.worker.terminate();
    return text;
  }
}
