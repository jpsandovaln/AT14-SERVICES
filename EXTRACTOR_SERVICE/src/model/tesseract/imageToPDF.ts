import { IBase } from "./interfaces/iBase";
import { Tesseract } from "./tesseractBase";
import * as fs from "fs";

export class ImageToPDF extends Tesseract {
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

  public async getText(): Promise<object> {
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
