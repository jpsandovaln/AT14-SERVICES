const CommandSchema = require("../CommandSchema.js");

test("class CommandSchema - A new Command should be created with an id of '-p' a defaultValue of '8080' and dataType of 'number'", () => {

    const result = new CommandSchema('-p', 8080, 'number');
    const expected = new CommandSchema('-p', 8080, 'number');
    expect(result).toStrictEqual(expected);
})

test("CommandSchema.getId() - A new CommandSchema element should be created then return an id of '-p'", () => {

    const CommandSchema = new CommandSchema('-p');
    const result = CommandSchema.getId();
    const expected = '-p';
    expect(result).toBe(expected);
})

test("CommandSchema.getValue() - A new CommandSchema element should be created then return a defaultValue of '8080'", () => {

    const CommandSchema = new CommandSchema('', 8080);
    const result = CommandSchema.getDefaultValue();
    const expected = 8080;
    expect(result).toBe(expected);
})

test("CommandSchema.getDataType() - A new CommandSchema element should be created then return a dataType of 'number'", () => {

    const CommandSchema = new CommandSchema('', 8080, 'number');
    const result = CommandSchema.getDataType();
    const expected = 'number';
    expect(result).toBe(expected);
})

test("CommandSchema.setId() - A new CommandSchema element should be created with an original id then change to '-p'", () => {

    const CommandSchema = new CommandSchema('-d');
    CommandSchema.setId('-p');
    const result = CommandSchema.getId();
    const expected = '-p';
    expect(result).toBe(expected);
})

test("CommandSchema.setDefaultValue() - A new CommandSchema element should be created with an original value then change to '8080'", () => {

    const CommandSchema = new CommandSchema('-p', 0);
    CommandSchema.setDefaultValue(8080);
    const result = CommandSchema.getDefaultValue();
    const expected = 8080;
    expect(result).toBe(expected);
})

test("CommandSchema.setDataType() - A new CommandSchema element should be created with an original value then change to 'number'", () => {

    const CommandSchema = new CommandSchema('-p', 0, 'boolean');
    CommandSchema.setDataType('number');
    const result = CommandSchema.getDataType();
    const expected = 'number';
    expect(result).toBe(expected);
})
/*
const CommandSchemaPort = new CommandSchema('-p', 0, 'number')
const CommandSchemaLogging = new CommandSchema('-l', false, 'boolean')
const CommandSchemaDir = new CommandSchema('-d', '', 'string')*/