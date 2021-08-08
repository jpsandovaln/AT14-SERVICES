
const Command = require("../Command");
const CommandInterpreter = require("../CommandInterpreter.js");

//Interpreter.js Unit Tests

//Compare Function

test("Interpreter.Compare() function should return a 'True' value", () => {

    const Interpreter = new Interpreter;
    const result = Interpreter.compare(1, 1);
    const expected = true;
    expect(result).toBe(expected)
})

test("Interpreter.Compare() function should return a 'False' value", () => {

    const Interpreter = new Interpreter;
    const result = Interpreter.compare(true, 1);
    const expected = false;
    expect(result).toBe(expected)
})

//validateCommandId Function

test("Interpreter.validateCommandId() function should return a 'True' value", () => {

    const Interpreter = new Interpreter;
    const port = new CommandInterpreter('-p');
    const portArg = new Command('-p');
    const result = Interpreter.validateCommandId(port, portArg);
    const expected = true;
    expect(result).toBe(expected)
})

test("Interpreter.validateCommandId() function should return a 'False' value", () => {

    const Interpreter = new Interpreter;
    const port = new CommandInterpreter('-p');
    const portArg = new Command('-d');
    const result = Interpreter.validateCommandId(port, portArg);
    const expected = false;
    expect(result).toBe(expected)
})

//validateCommandType

test("Interpreter.validateCommandType() function should return a 'True' value", () => {

    const Interpreter = new Interpreter;
    const logging = new CommandInterpreter('-l', false, 'boolean');
    const loggingArg = new Command('-l', true);
    const result = Interpreter.validateCommandType(loggingArg, logging);
    const expected = true;
    expect(result).toBe(expected)
})

test("Interpreter.validateCommandType() function should return a 'True' value", () => {

    const Interpreter = new Interpreter;
    const logging = new CommandInterpreter('-l', false, 'boolean');
    const loggingArg = new Command('-l', false);
    const result = Interpreter.validateCommandType(loggingArg, logging);
    const expected = true;
    expect(result).toBe(expected)
})

test("Interpreter.validateCommandType() function should return a 'False' value", () => {

    const Interpreter = new Interpreter;
    const logging = new CommandInterpreter('-l', false, 'boolean');
    const loggingArg = new Command('-l', 8080);
    const result = Interpreter.validateCommandType(loggingArg, logging);
    const expected = false;
    expect(result).toBe(expected)
})
test("Interpreter.validateCommandType() function should return a 'False' value", () => {

    const Interpreter = new Interpreter;
    const logging = new CommandInterpreter('-l', false, 'boolean');
    const loggingArg = new Command('-l');
    const result = Interpreter.validateCommandType(loggingArg, logging);
    const expected = false;
    expect(result).toBe(expected)
})

//setDefaultValue

test("Interpreter.setDefaultValue() - Should return a 'True' value", () => {

    const port = new CommandInterpreter('-p', 0, 'number');

    const Interpreter = new Interpreter();

    const portArg = new Command('-p')

    const result = Interpreter.setDefaultValue(portArg, port);
    const expected = true;
    expect(result).toBe(expected)
})

//validateCommand

test("Interpreter.validateCommand() - Should validate a correct Command with value and return a 'True' value", () => {

    const port = new CommandInterpreter('-p', 0, 'number');

    const Interpreter = new Interpreter([port]);

    const portArg = new Command('-p', 8080)

    const result = Interpreter.validateCommand(portArg);
    const expected = true;
    expect(result).toBe(expected)
})


test("Interpreter.validateCommand() - Should validate a correct Command without value and return a 'True' value", () => {

    const port = new CommandInterpreter('-p', 0, 'number');

    const Interpreter = new Interpreter([port]);

    const portArg = new Command('-p')

    const result = Interpreter.validateCommand(portArg);
    const expected = true;
    expect(result).toBe(expected)
})

test("Interpreter.validateCommand() - Should validate a wrong Command and return a 'False' value", () => {

    const port = new CommandInterpreter('-p', 0, 'number');

    const Interpreter = new Interpreter([port]);

    const portArg = new Command('-x', 0)

    const result = Interpreter.validateCommand(portArg);
    const expected = false;
    expect(result).toBe(expected)
})

test("Interpreter.validateCommand() - Should validate a wrong Command and return a 'True' value", () => {

    const port = new CommandInterpreter('-p', 0, 'number');
    const logging = new CommandInterpreter('-l', false, 'boolean');
    const dir = new CommandInterpreter('-d', '', 'string');

    const Interpreter = new Interpreter([logging, dir, port]);

    const portArg = new Command('-l');

    const result = Interpreter.validateCommand(portArg);
    const expected = true;
    expect(result).toBe(expected);
})
