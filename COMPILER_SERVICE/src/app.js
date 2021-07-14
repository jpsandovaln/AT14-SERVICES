const express = require('express');
const app = express();
const Compiler = require('./compiler');

app.get('/compiler', async (req, res) => {
    const compiler = new Compiler();
    const result = await compiler.execute('d:/HelloWorld.java');

    res.send(result);
});

const port = process.env.PORT || 8082;

app.listen(port, () => console.info('server running...'));
