import shortid from 'shortid';
import axios from "axios";

import * as fs from 'fs';

import { GraphQLUpload } from 'graphql-upload';


// import File from './fileModel';

const File = [];

const storeUpload = async ({ stream, filename, mimetype }) => {
  const id = shortid.generate();
  const path = `images/${id}-${filename}`;
  /*
  await stream.pipe(fs.createWriteStream(path))
  return {
    url: `http://localhost:4000/images/${path}`
  }
  */
  return new Promise((resolve, reject) =>
    stream
      .pipe(fs.createWriteStream(path))
      .on('finish', () => resolve({ id, path, filename, mimetype }))
      .on('error', reject)
  );
};

const processUpload = async (upload) => {
  const { createReadStream, filename, mimetype } = await upload;
  const stream = createReadStream();
  const file = await storeUpload({ stream, filename, mimetype });
  return file;
};

const resolvers = {
  Upload: GraphQLUpload,
  Query: {
    files: async () => {
      return await File;
    },
  },
  Mutation: {
    uploadFile: async (_, args ) => {
      fs.mkdir('images', { recursive: true }, (err) => {
        if (err) throw err;
      });
      console.log(args);
      const uploadFile = await processUpload(args.file);

      const dataArray = new FormData();
      dataArray.append("name", args.name);
      dataArray.append("zipFile", uploadFile);      

      axios
      .post(urlML, dataArray, {
          headers: {
              "Content-Type": "multipart/form-data",
          },
      })
      .then((res) => {
          setResponse(res.data);
      })
      .catch((error) => {
          console.log(error);
      });      

      File.push(uploadFile);
      //console.log(upload);
      //await File.create(upload);
      return uploadFile;
    },
  },
};

export default resolvers;
