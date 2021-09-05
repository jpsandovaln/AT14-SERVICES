const Product = require("./product");

class CompositeProduct extends Product {
    constructor(name) {
        super(name, 0);
        this._productList = [];
    }

    get price() {
        let price = 0;
        this._productList.forEach(product => {
            price = price + product.price;
        });
        return price;
    }

    addProduct(product) {
        this._productList.push(product);
    }

    removeProduct(product) {
        this._productList.remove(product);
    }
}

module.exports = CompositeProduct;
