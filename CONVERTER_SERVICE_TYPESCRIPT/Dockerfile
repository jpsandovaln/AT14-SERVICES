FROM node:14-alpine

RUN apk add --upgrade ffmpeg

RUN apk add --upgrade imagemagick

RUN apk add exiftool perl-image-exiftool

RUN apk add --upgrade ghostscript-gtk

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN mkdir -p /app/resources/audio

RUN mkdir -p /app/resources/image

RUN mkdir -p /app/resources/outputPath

RUN mkdir -p /app/resources/upload

RUN mkdir -p /app/resources/video

RUN mkdir -p /app/resources/zip

CMD [ "npm", "start" ]
