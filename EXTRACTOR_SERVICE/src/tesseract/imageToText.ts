import { createWorker } from "tesseract.js";

const worker = createWorker();
export class ImageToText {
  language: string;
  imagePath: string;
  text: string;

  constructor(language: string, imagePath: string) {
    this.language = language;
    this.imagePath = imagePath;
    this.text = "";
  }

  public initializeExtractor = async () => {
    await worker.load();
    await worker.loadLanguage(this.language);
    await worker.initialize(this.language);
  };

  public extractText = async () => {
    const {
      data: { text },
    } = await worker.recognize(this.imagePath);
    this.text = text;
  };

  public getText(){
    return this.text;
  }
}
