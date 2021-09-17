## EXTRACTOR SERVICE

Project in typescript that extract text from an image and get metadata of files.

## Project setup

`npm install`

### Run

`npm start`

### .env
```
Create a .env file with direccions:
EXTRACTOR_ROOT
EXTRACTOR_APP
EXTRACTOR_PORT
UPLOAD_PATH
```
### Requirements to correctly run the program
```
Create / verify the following folders inside EXTRACTOR_SERVICE:
public/uploads
```

## Tesseract model

We are using Tesseract OCR (Optical Character Recognition) to extract text from images.

In this project we use as dependency of node.js

### Diagram Classes

![image](https://res.cloudinary.com/marcandea/image/upload/v1629742108/samples/extract_diagram_ryv8jq.png)

### Documentation

[Tesseract OCR](https://github.com/tesseract-ocr/tessdoc#tesseract-user-manual)

[Tesseract.js](https://github.com/naptha/tesseract.js)

### Dependencies

Use node version: `16.7.0`

___
### Usage

First at all, you can use: `npm ci` or `npm install` to install packages of the project.

Run:

`npm start`

If you have an error maybe you to create the **build** folder in the level of src, routes, etc...

If you are inside EXTRACTOR_SERVICE:

    mkdir build

___
The above commands create the .js files of the project and run the application in port 3000.

Execute methods of Tesseract:

`node build/model/tesseract/execute.js`

### execute.js

It's a file that have the hardcode executions of tesseract and those will consume by a service.
