const Command = require("../Command");

test("class Command - A new Command should be created with an id of '-p' and value of '8080'", () => {

    const result = new Command('-p', 8080);
    const expected = new Command('-p', 8080);
    expect(result).toStrictEqual(expected);
})

test("Command.getId() - A new Command element should be created then return an id of '-p'", () => {

    const Command = new Command('-p');
    const result = Command.getId();
    const expected = '-p';
    expect(result).toBe(expected);
})

test("Command.getValue() - A new Command element should be created then return a value of '8080'", () => {

    const Command = new Command('', 8080);
    const result = Command.getValue();
    const expected = 8080;
    expect(result).toBe(expected);
})

test("Command.setId() - A new Command element should be created with an original id then change to '-p'", () => {

    const Command = new Command('-d', 0);
    Command.setId('-p');
    const result = Command.getId();
    const expected = '-p';
    expect(result).toBe(expected);
})

test("Command.setValue() - A new Command element should be created with an original value then change to '-p'", () => {

    const Command = new Command('-p', 0);
    Command.setValue(8080);
    const result = Command.getValue();
    const expected = 8080;
    expect(result).toBe(expected);
})
