const image = document.getElementById("ciudad");

cocoSsd
  .load()
  .then((model) => model.detect(image))
  .then((predictions) => console.log(predictions));
