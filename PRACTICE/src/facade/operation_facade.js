const Calculate = require('./operation/calculate');
const Employee = require('./person/employee');

class OperationFacade {
    static calculate(data) {
        const calculate = new Calculate();
        const employee = new Employee(data.firstName, data.lastName);

        console.info('calculation made by ' + employee.firstName);
        console.info(calculate.add(data.val1, data.val2));
    }
}

module.exports = OperationFacade;
