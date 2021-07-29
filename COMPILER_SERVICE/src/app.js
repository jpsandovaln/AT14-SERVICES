const express = require('express');
const multer = require('multer');
const fs = require('fs');
require('dotenv').config({ path: '../.env'});
const Execute = require('./core/execute');
const JavaCommand = require('./core/java_command');
const JavaParameter =require('./core/java_parameter');
const PythonCommand = require('./core/python_command');
const PythonParameter = require('./core/python_parameter');

const app = express();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const path = '../upload/';
        fs.mkdirSync(path, { recursive: true});
        cb(null, path);
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    } 
});

const upload = multer({ storage: storage });

app.post('/compiler', upload.single('file'), async (req, res) => {
    if (req.body.language === 'python'){
        const pythonCommand = new PythonCommand();
        const pythonParameter = new PythonParameter(req.file.path, process.env.EXECUTE_PYTHON32);
        const command = pythonCommand.build(pythonParameter);
        const execute = new Execute();
        const result = await execute.run(command);
        res.send(result);
    }
    if (req.body.language === 'java') {
        const javaCommand = new JavaCommand();
        const javaParameter = new JavaParameter(req.file.path, process.env.EXECUTE_JAVA8);
        const command = javaCommand.build(javaParameter);
        const execute = new Execute();
        const result = await execute.run(command);
        res.send(result);
    }
});

const port = process.env.PORT || 8082;

app.listen(port, () => console.info('server running...'));
