// import { createWorker } from "tesseract.js";
import { createWorker } from "tesseract.js";
import { ImageToText } from "./imageToText";
import { ImageToTextBySize } from "./imageToTextBySize";
import { ImageToPDF } from "./imageToPDF";
import { IBase } from "./interfaces/iBase";
import { IImage } from "./interfaces/iImage";

const worker = createWorker();

const imageBasic: IBase = {
  worker: worker,
  language: "eng",
  path: "https://telegram.org/file/811140100/2/maZcBXgwrmE.306486/5bd7c8f4708afe28f8",
}
const imageToText = new ImageToText(imageBasic);

const rectanglePart = {
  left: 0,
  top: 0,
  width: 500,
  height: 250,
};
const imageBS: IImage = {
  worker: worker,
  language: "eng",
  path: "https://telegram.org/file/811140100/2/maZcBXgwrmE.306486/5bd7c8f4708afe28f8",
  rectangle: rectanglePart
}
const imageToTextBySize = new ImageToTextBySize(imageBS);

const imageToPDF = new ImageToPDF(imageBS);


// (async () => console.log(await imageToTextBySize.getText()))();
// (async () => console.log(await imageToText.getText()))();
(async () => console.log(await imageToPDF.getText()))();