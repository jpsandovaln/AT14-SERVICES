/* THIS FILE IT'S ONLY FOR EXECUTE METHOD
  - Available until to consume with a service.
*/

import { createWorker } from "tesseract.js";
import { ImageToText } from "./imageToText";
import { ImageToTextBySize } from "./imageToTextBySize";
import { ImageToPDF } from "./imageToPDF";
import { IBase } from "./interfaces/iBase";
import { IImage } from "./interfaces/iImage";

const worker = createWorker();
const linkEnglishChino = "https://res.cloudinary.com/marcandea/image/upload/v1629733958/samples/text-eng-chin_kxe165.png";
const pathEnglishChino = "/home/marc/at14/prog101/projects/AT14-SERVICES/EXTRACTOR_SERVICE/assets/text-eng-chin.png"

// Object Base to extract text.
const imageBasic: IBase = {
  worker: worker,
  language: "eng+chi_tra",
  path: pathEnglishChino,
};
const imageToText = new ImageToText(imageBasic);
//

// Object Base to get a part of image
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
  rectangle: rectanglePart,
};
const imageToTextBySize = new ImageToTextBySize(imageBS);
//

// Object Base to convert in PDF
const imageToDocument: IBase = {
  worker: worker,
  language: "eng+chi_tra",
  path: linkEnglishChino,
};
const imageToPDF = new ImageToPDF(imageToDocument);
//

/* EXECUTE METHODS */

// (async () => console.log(await imageToTextBySize.getText()))();
// (async () => console.log(await imageToText.getText()))();
(async () => console.log(await imageToPDF.getText()))();
