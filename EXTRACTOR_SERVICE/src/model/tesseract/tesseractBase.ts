import { IBase } from "./interfaces/iBase";

export abstract class Tesseract {
  constructor(protected properties: IBase) {}
  /**
   * Initialize the Worker to extract text from an image.
   * @abstract method
   *
   */
  abstract loadWorker(): void;

  /**
   * Create the neccessary actions to extract text from an image.
   * It returns and object or text, according to the method
   * inside him.
   * @abstract method
   *
   */
  abstract getText(): any;
}
