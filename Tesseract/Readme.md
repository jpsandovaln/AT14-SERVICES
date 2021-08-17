## Tesseract

We are using Tesseract OCR (Optical Character Recognition) to extract text from images.

In this project we use as dependency of node.js

### Documentation

[Tesseract OCR](https://github.com/tesseract-ocr/tessdoc#tesseract-user-manual)
[Tesseract for Node.js](https://github.com/zapolnoch/node-tesseract-ocr#tesseract-ocr-for-nodejs)

### Dependencies

- Install Tesseract according your operating system (version 5.00 alpha)
  [Tesseract Linux](https://github.com/tesseract-ocr/tessdoc/blob/master/Installation.md#tesseract-development-version-with-lstm-engine-and-related-traineddata)
  [Tesseract Windows](https://github.com/UB-Mannheim/tesseract/wiki#tesseract-installer-for-windows)
- Tesseract.js currently requires Node.js v6.8.0 or higher.

### Usage

Install Typescript compiler:

`npm install -g typescript`

- Verify compiler:

  `tsc --version` -> `Version 4.^`


Now you can install the npm-package for this project:

`npm install`

Run:

`node tesseract.js`
