import { IBase } from "./interfaces/iBase";
import { Extractor } from "./extractor";

export class ImageToText extends Extractor {

  constructor(properties: IBase) {
    super(properties);
  }

  public async extract(): Promise<Text> {
    await this.loadWorker();
    const {
      data: { text },
    } = await this.worker.recognize(this.path);
    await this.worker.terminate();
    return text;
  }
}
