# Node.js Express Upload/Download file Rest API

File Manager Service, It lets you upload and Download different types of files. The size of the file and the extension can be modified too if it's needed.

## Project setup

If you are working locally:

```

npm install

```

Adapt the .env file.

```
# Example, you need to redirect the ffmpeg to the .exe file:
CONVERTER_PATH=E:/Marcan/AT14/PROG101/AT14-SERVICES/CONVERTER_SERVICE/thirdParty/ffmpeg.exe
CONVERTER_PATH_EXIFTOOL=exiftool
# You will create these folders and redirect with this type of path.
OUTPUT_PATH=E:/Marcan/AT14/PROG101/AT14-SERVICES/CONVERTER_SERVICE/resources/outputPath/
UPLOAD_PATH=E:/Marcan/AT14/PROG101/AT14-SERVICES/CONVERTER_SERVICE/resources/upload/
VIDEO_PATH=E:/Marcan/AT14/PROG101/AT14-SERVICES/CONVERTER_SERVICE/resources/video/
AUDIO_PATH=E:/Marcan/AT14/PROG101/AT14-SERVICES/CONVERTER_SERVICE/resources/audio/
ZIP_PATH=E:/Marcan/AT14/PROG101/AT14-SERVICES/CONVERTER_SERVICE/resources/zip/
BASE_URL_CONVERTER="http://localhost"

# We are using Apollo Server in 4000 port, you would considearte change this port to 4050.
PORT_CONVERTER=4050
# Change the IP to localhost:
IP_MONGO=localhost
```

Now you need to up the MongoDB from docker.

```
1. Docker interface installed
2. Open console from the Docker windows.
3. Execute this command
   docker-compose up
4. Now select "at14_services_mongo_db_1" and click on Play button.
```

![alt text](https://res.cloudinary.com/marcandea/image/upload/v1631017883/readmes/mongoup_mfhlrf.png)
Verify your MongoDB connection with Compass:

```
5. MongoDB Compass installed
6. Open Compass, and go to 'connect' tab and 'connect to' option.
7. Insert the next line in the connection string:
mongodb://localhost:27018/readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false
8. Click on Connect.
```

You will have the next window:
![alt text](https://res.cloudinary.com/marcandea/image/upload/v1631017883/readmes/compass_a3pmmo.png)

### Requirements to correctly run the program

Create / verify the following folders inside the resources folder:

```
audio
image
imagesProcessor
outputPathPDF
outputPath
upload
uploadImages
video
zip
```

### Run

```

node server.js

```

You should have the next view:
![alt text](https://res.cloudinary.com/marcandea/image/upload/v1631017883/readmes/consoleup_behxr4.png)
