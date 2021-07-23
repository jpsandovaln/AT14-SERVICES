const express = require('express');
const multer = require('multer');
const fs = require('fs');
require('dotenv').config({ path: '../.env'});
const Execute = require('./core/execute');
const JavaCommand = require('./core/java_command');
const JavaParameter =require('./core/java_parameter');

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
    const javaCommand = new JavaCommand();
    console.info(process.env.EXECUTE_JAVA8);
    const javaParameter = new JavaParameter(req.file.path, process.env.EXECUTE_JAVA8);
    const command = javaCommand.build(javaParameter);
    console.info(command);
    const execute = new Execute();
    const result = await execute.run(command);
    console.info(result);
    res.send(result);
});

const port = process.env.PORT || 8082;

app.listen(port, () => console.info('server running...'));
