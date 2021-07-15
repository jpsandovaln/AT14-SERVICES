const imagen = document.getElementById("ciudad");
class Model {
  constructor(image) {
    this.image = image;
  }

  identify() {
    cocoSsd
      .load()
      .then((model) => model.detect(this.image))
      .then((predictions) => console.log(predictions));
    return predictions;
  }
}

const prueba = new Model(imagen);
prueba.identify();
