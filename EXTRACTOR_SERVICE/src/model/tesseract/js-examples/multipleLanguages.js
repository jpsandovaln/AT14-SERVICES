const { createWorker } = require('tesseract.js');

const worker = createWorker();

(async () => {
  await worker.load();
  await worker.loadLanguage('eng+chi_tra');
  await worker.initialize('eng+chi_tra');
  const { data: { text } } = await worker.recognize('https://tesseract.projectnaptha.com/img/eng_bw.png');
  console.log(text);
  await worker.terminate();
})();