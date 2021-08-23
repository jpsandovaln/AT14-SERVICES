export abstract class Tesseract {
  constructor(
    protected worker: any,
    public language: string,
    public path: string
  ) {}

  abstract loadWorker(): void;

  abstract getText(): any;
}
