const { createWorker, createScheduler } = require('tesseract.js');

const scheduler = createScheduler();
const worker1 = createWorker();
const worker2 = createWorker();
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
  await worker1.load();
  await worker2.load();
  await worker1.loadLanguage('eng');
  await worker2.loadLanguage('eng');
  await worker1.initialize('eng');
  await worker2.initialize('eng');
  scheduler.addWorker(worker1);
  scheduler.addWorker(worker2);
  const results = await Promise.all(rectangles.map((rectangle) => (
    scheduler.addJob('recognize', 'https://tesseract.projectnaptha.com/img/eng_bw.png', { rectangle })
  )));
  console.log(results.map(r => r.data.text));
  await scheduler.terminate();
})();