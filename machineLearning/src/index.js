export class Model {
  constructor(image) {
    this.image = image;
  }

  modeling() {
    const myPromise = cocoSsd.load().then((model) => {
      const modelo = model.detect(this.image);
      return modelo;
    });
    return myPromise;
  }

  logging() {
    const model = this.modeling();
    model.then((logging) => {
      console.log(logging);
    });
  }
}

const imagen = document.getElementById("ciudad");
const modeling = new Model(imagen);
modeling.modeling();
modeling.logging();
