import { createWorker } from "tesseract.js";

const worker: any = createWorker();

async function loadWorker(){
  await worker.load();
  await worker.loadLanguage("eng");
  await worker.initialize("eng");
};

async function getText(){
  const {
    data: { text },
  } = await worker.recognize(
    "https://telegram.org/file/811140100/2/maZcBXgwrmE.306486/5bd7c8f4708afe28f8"
  );
  return text;
}

(async () => {
  await loadWorker();
  console.log(await getText());
  await worker.terminate();
})();
