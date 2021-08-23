import { IBase } from "./interfaces/iBase";

export abstract class Tesseract {
  constructor(protected properties: IBase) {}

  abstract loadWorker(): void;

  abstract getText(): any;
}
