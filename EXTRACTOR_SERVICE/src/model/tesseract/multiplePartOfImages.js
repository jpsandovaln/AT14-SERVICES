const { createWorker } = require('tesseract.js');

const worker = createWorker();
const rectangles = [
  {
    left: 0,
    top: 0,
    width: 500,
    height: 250,
  },
  {
    left: 500,
    top: 0,
    width: 500,
    height: 250,
  },
];

(async () => {
  await worker.load();
  await worker.loadLanguage('eng');
  await worker.initialize('eng');
  const values = [];
  for (let i = 0; i < rectangles.length; i++) {
    const { data: { text } } = await worker.recognize('https://tesseract.projectnaptha.com/img/eng_bw.png', { rectangle: rectangles[i] });
    values.push(text);
  }
  console.log(values);
  await worker.terminate();
})();