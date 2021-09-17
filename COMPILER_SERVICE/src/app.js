const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
const fs = require('fs');
require('dotenv').config({ path: '../.env'});
const CompilerFactory = require('./core/compiler/compiler_factory');

const Url = require('./model/url_model');
const ParameterInvalidException = require('./common/exception/parameter_exception');
const { prependOnceListener } = require('./model/url_model');
const CShardCode = require('./core/compiler/code/cshard_code');

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
    let binary = '';

    if (req.body.language === 'python') {
        binary = process.env.EXECUTE_PYTHON32;
    } else {
        binary = process.env.EXECUTE_JAVA8;
    }
    try {
        langCompiler = CompilerFactory.getInstance(
            req.body.language,
            req.file.path,
            binary
        );
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
