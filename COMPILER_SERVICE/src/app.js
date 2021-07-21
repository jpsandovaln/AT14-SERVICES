const express = require('express');
const Execute = require('./core/execute');
const JavaCommand = require('./core/java_command');
const JavaParameter =require('./core/java_parameter');

const app = express();

app.get('/compiler', async (req, res) => {
    const javaCommand = new JavaCommand();
    const javaParameter = new JavaParameter('d:/HelloWorld.java', '"C:/Program Files/Java/jdk1.8.0_251/bin/"');
    const command = javaCommand.build(javaParameter);
    console.info(command);
    const execute = new Execute();
    const result = await execute.run(command);
    console.info(result);
    res.send(result);
});

const port = process.env.PORT || 8082;

app.listen(port, () => console.info('server running...'));
