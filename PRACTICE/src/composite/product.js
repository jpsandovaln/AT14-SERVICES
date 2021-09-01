class Product {
    constructor(name, price) {
        this._name = name;
        this._price = price;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }
    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }
}

module.exports = Product;
