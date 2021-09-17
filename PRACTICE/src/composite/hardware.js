const Product = require("./product");

class Hardware extends Product {
    constructor(name, price, brand) {
        super(name, price);
        this._brand = brand;
    }

    get brand() {
        return this._brand;
    }

    set brand(value) {
        this._brand = value;
    }
}

module.exports = Hardware;
