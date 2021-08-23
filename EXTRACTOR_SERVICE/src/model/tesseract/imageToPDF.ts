import { IBase } from "./interfaces/iBase";
import { Tesseract } from "./tesseractBase";
import * as fs from "fs";

export class ImageToPDF extends Tesseract {
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
    const { data } = await this.worker.getPDF("Tesseract OCR Result");
    fs.writeFileSync("tesseract-ocr-result.pdf", Buffer.from(data));
    await this.worker.terminate();
    return data;
  }
}
