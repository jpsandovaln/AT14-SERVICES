// import { createWorker } from "tesseract.js";
import { createWorker } from "tesseract.js";
import { ImageToText } from "./imageToText";

const worker = createWorker();

const imageToText = new ImageToText(
  worker,
  "eng",
  "https://telegram.org/file/811140100/2/maZcBXgwrmE.306486/5bd7c8f4708afe28f8"
);

(async () => console.log(await imageToText.getText()))();
