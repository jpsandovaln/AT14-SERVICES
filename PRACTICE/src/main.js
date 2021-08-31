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

const document = new ImportantDocument("doc1", "d:/doc1,pdf");
document.displayState();

document.state = new ReviewState();
document.displayState();

document.state = new ProgressState();
document.displayState();

document.state = new CompleteState();
document.displayState();

document.state = new RejectState();
document.displayState();