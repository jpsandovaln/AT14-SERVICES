const { createWorker } = require('tesseract.js');

const worker = createWorker();
const rectangle = { left: 0, top: 0, width: 500, height: 250 };

(async () => {
  await worker.load();
  await worker.loadLanguage('eng');
  await worker.initialize('eng');
  const { data: { text } } = await worker.recognize('https://tesseract.projectnaptha.com/img/eng_bw.png', { rectangle });
  console.log(text);
  await worker.terminate();
})();