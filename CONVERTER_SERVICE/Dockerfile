FROM node:14-alpine

RUN apk add --upgrade ffmpeg

RUN apk add --upgrade imagemagick

RUN apk add exiftool perl-image-exiftool

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "node", "server.js" ]
