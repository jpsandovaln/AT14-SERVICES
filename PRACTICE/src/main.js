const Compile = require('./compiler');

class Main {
    constructor(value) {
        this.value = value;
    }

    evaluateAge() {
        if (this.value > 18) {
            console.info('mayor de edad');
        } else {
            console.info("menor de edad");
        }
    }

    datatype() {
        let numberTest = 50;
        let stringTest = 'test';
        const undefinedTest = undefined;
        const functionTest = () => { return 'function 123'; }            
        const objectTest = {
            name: 'Pedro',
            lastName: 'Sanchez',
            age: 15
        }

        console.info('number = ' + numberTest);
        console.info('string = ' + stringTest);
        console.info('undefined = ' + undefinedTest);
        console.info('function = ' + functionTest());
        console.info('object = ' + JSON.stringify(objectTest));
    }
}

/* const main = new Main(18);
main.evaluateAge();
main.datatype(); */

const compiler = new Compile();
compiler.execute('d:/HelloWorld.java');

