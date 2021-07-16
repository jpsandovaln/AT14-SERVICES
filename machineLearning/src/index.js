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
  selectData(objectSeacrched, percentage) {
    let number = 0;
    const model = this.modeling();
    model.then((listObjects) => {
      listObjects.forEach((element) => {
        if (element.class === objectSeacrched && element.score >= percentage) {
          number += 1;
        }
      });
      console.log(
        "Se han encontrado",
        number,
        "objetos tipo",
        objectSeacrched,
        "al",
        percentage * 100,
        "%"
      );
      const dataSelected = {
        model: "cocoSsd",
        objectS: objectSeacrched,
        percetn: percentage,
        quantity: number
      };
      return dataSelected;
    });
  }
}

const imagen = document.getElementById("ciudad");
const modeling = new Model(imagen);
modeling.modeling();
modeling.logging();
modeling.selectData("car", 0.9);
