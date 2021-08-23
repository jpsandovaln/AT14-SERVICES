import { Tesseract } from "./tesseractBase";

export class ImageToText extends Tesseract {
  constructor(worker: any, language: string, path: string) {
    super(worker, language, path);
  }

  async loadWorker() {
    // ah re con el console
    console.log(this.path + this.language);
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
