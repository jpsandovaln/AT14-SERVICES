class Command {

    constructor(id = '', value) {

        this.id = id;
        this.value = value;
    }

    //get and set the "id"

    getId() {

        return this.id;
    }
    setId(id) {

        this.id = id;
    }

    //get and set the value

    getValue() {

        return this.value;
    }
    setValue(value) {

        this.value = value;
    }

}

module.exports = Command;