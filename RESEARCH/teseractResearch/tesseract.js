const { createWorker } = require("tesseract.js");
const tess = require("tesseract.js");

const worker = createWorker();
(async () => {
    await worker.load();
    await worker.loadLanguage("eng");
    await worker.initialize("eng");
    const {
        data: { text }
    } = await worker.recognize(
        //"https://telegram.org/file/811140100/2/maZcBXgwrmE.306486/5bd7c8f4708afe28f8"
        "C:/Users/serqi/Desktop/Fundacion/prog102/teseractResearch/resources/conversation.jpg"
    );
    console.log(text);
    await worker.terminate();
})();
