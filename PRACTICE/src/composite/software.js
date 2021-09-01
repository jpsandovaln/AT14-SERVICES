const Product = require("./product");

class Software extends Product {
    constructor(name, price, type) {
        super(name, price);
        this._type = type;
    }

    get type() {
        return this._brand;
    }

    set type(value) {
        this._type= value;
    }
}

module.exports = Software;
