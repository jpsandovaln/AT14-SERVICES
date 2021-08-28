FROM node:14-alpine

RUN apk add --upgrade ffmpeg

RUN apk add --upgrade imagemagick

RUN apk add --upgrade perl-image-exiftool

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm", "start" ]