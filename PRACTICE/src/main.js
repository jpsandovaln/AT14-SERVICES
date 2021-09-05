const Compile = require('./compiler');
const Calculate = require('./facade/operation/calculate');
const OperationFacade = require('./facade/operation_facade');
const Employee = require('./facade/Person/employee');
const Computer = require('./memento/computer');
const CareTaker = require('./memento/caretaker');
const Document = require('./state/document');
const ImportantDocument = require('./state/important_document');
const ReviewState = require('./state/review_state');
const ProgressState = require('./state/progress_state');
const CompleteState = require('./state/complete_state');
const RejectState = require('./state/reject_state');
const ATM = require('./chain/atm');
const Hardware = require('./composite/hardware');
const Software = require('./composite/software');
const Sales = require('./composite/sales');
const CompositeProduct = require('./composite/composite_product');

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

/* const compiler = new Compile();
compiler.execute('d:/HelloWorld.java'); */

/*const calculate = new Calculate();
const employee = new Employee('Juan', 'Perez');

console.info('calculation made by ' + employee.firstName);
console.info(calculate.add(5, 6));*/

/* OperationFacade.calculate({
    firstName: 'Pepe',
    lastName: 'Vargas',
    val1: 8,
    val2: 10
});*/

/*const computer1 = new Computer('unix', '16GB', '1TB');
computer1.toString();


const computer2 = new Computer('win', '128MB', '128MB');
computer2.toString();*/

/*const computer1 = new Computer('unix', '16GB', '1TB');
computer1.toString();
console.info('*************************');
const caretaker = new CareTaker();
caretaker.addComputer(1, computer1.backup());

computer1.op = 'win';
computer1.memory = '128MB';
computer1.hdd = '512GB'

computer1.toString();
console.info('*************************');
caretaker.addComputer(2, computer1.backup());


computer1.restore(caretaker.getComputer(1));
computer1.toString();
console.info('*************************');

computer1.restore(caretaker.getComputer(2));
computer1.toString();
console.info('*************************');*/

/*const document = new Document("doc1", "d:/docs/doc1.pdf");
document.displayState();

document.state = "review";
document.displayState();*/

/*const document = new ImportantDocument("doc1", "d:/doc1,pdf");
document.displayState();

document.state = new ReviewState();
document.displayState();

document.state = new ProgressState();
document.displayState();

document.state = new CompleteState();
document.displayState();

document.state = new RejectState();
document.displayState();*/

/*const atm = new ATM(6754);
atm.getMoney();*/

const memory = new Hardware("memory", 100, "abc");
const hdd = new Hardware("hdd", 200, "xyz");
const motherboard = new Hardware("motherboard", 300, "asus");

const cd = new Software("windows", 30, "os");

const comProduct1 = new CompositeProduct("PC Gamer");
comProduct1.addProduct(memory);
comProduct1.addProduct(hdd);
comProduct1.addProduct(motherboard);

const comProduct2 = new CompositeProduct("PC1");
comProduct2.addProduct(memory);
comProduct2.addProduct(hdd);

const comProduct3 = new CompositeProduct("PC2");
comProduct3.addProduct(memory);
comProduct3.addProduct(hdd);
comProduct3.addProduct(motherboard);
comProduct3.addProduct(cd);

const combo = new CompositeProduct("combo pc");
combo.addProduct(comProduct2);
combo.addProduct(comProduct3);

const sales1 = new Sales(1);
sales1.addProduct(memory);
sales1.addProduct(hdd);
sales1.addProduct(cd);

sales1.display();


const sales2 = new Sales(2);
sales2.addProduct(comProduct3);
sales2.display();

const sales3 = new Sales(3);
sales3.addProduct(memory);
sales3.addProduct(comProduct1);
sales3.addProduct(combo);
sales3.display();






