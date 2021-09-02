# Node.js Express Upload/Download file Rest API

File Manager Service, It lets you upload and Download different types of files. The size of the file and the extension can be modified too if it's needed.

## Project setup

```
npm install
```

### Run

```
npm start
```

### .env

Have to change de direccions of:

```
CONVERTER_PATH
OUTPUT_PATH
ZIP_PATH

```

also this lines below needs to be added:

```
DB_CONNECTION="mongodb://localhost:27017/converterDB"
MAIN_PATH=/home/<user>/Workspace/Prog101/AT14-SERVICES/CONVERTER_SERVICE/

```

### checksum

```
npm install md5
```

### Requirements to correctly run the program

```
Create / verify the following folders inside the resources folder:
audio
image
outputPath
upload
video
zip
```
