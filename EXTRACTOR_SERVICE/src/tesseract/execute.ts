import { ImageToText } from "./imageToText";

const imageToText: ImageToText = new ImageToText("eng", "https://telegram.org/file/811140100/2/maZcBXgwrmE.306486/5bd7c8f4708afe28f8");

imageToText.initializeExtractor();
imageToText.extractText();
console.log(imageToText.getText());