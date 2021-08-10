const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
const fs = require('fs');
require('dotenv').config({ path: '../.env'});
const JavaCompiler = require('./core/compiler/java_compiler');
const PythonCompiler = require('./core/compiler/python_compiler');

const Url = require('./model/url_model');
const ParameterInvalidException = require('./common/exception/parameter_exception');

mongoose.connect('mongodb://localhost:27017/compiler')
    .then(db => console.info('DB is connected'))
    .catch(err => console.info('Error...'))

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

    const url = new Url({name: 'test1', url: 'file path'});
    url.save();
    
    let langCompiler = {};

    try {
        if (req.body.language === 'python'){
            langCompiler = new PythonCompiler(req.file.path, process.env.EXECUTE_PYTHON32);
        } else if (req.body.language === 'java') {
            langCompiler = new JavaCompiler(req.file.path, process.env.EXECUTE_JAVA8);
        } else {
            throw new ParameterInvalidException('Invalid language.', 'SAB-3574');
        }
        const result = await langCompiler.compiler();
        res.send(result);
    } catch (err) {
        res.status(err.status).send({
            message: err.message,
            type: err.name,
            code: err.code
        });
    }
});

const port = process.env.PORT || 8082;

app.listen(port, () => console.info('server running...'));
