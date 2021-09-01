class Sales {
    constructor(id) {
        this._id = id;
        this._productList = [];
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    addProduct(product) {
        this._productList.push(product);
    }

    removeProduct(product) {
        this._productList.remove(product);
    }

    get total() {
        let total = 0;
        this._productList.forEach(product => {
            total = total + product.price;
        });
        return total;
    }

    display() {
        console.info("----------------------------");
        console.info("Sales Id: " + this._id);
        this._productList.forEach(product => {
            console.info("Product: " + product.name + " - Price: " + product.price);
        })
        console.info("Total: " + this.total);
        console.info("----------------------------");
    }
}

module.exports = Sales;
