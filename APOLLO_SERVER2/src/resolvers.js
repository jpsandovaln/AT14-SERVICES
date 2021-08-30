import shortid from 'shortid';
import FormData from 'form-data';

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
    machines: async () => {
      return await File;
    },
  },
  Mutation: {
    uploadFileML: async (_, args ) => {
      fs.mkdir('images', { recursive: true }, (err) => {
        if (err) throw err;
      });

      const uploadFile = await processUpload(args.file);
      const dataArray = new FormData();
      dataArray.append("searchWord", args.searchWord);
      dataArray.append("algorithm", args.algorithm);
      dataArray.append("percentage", args.percentage);
      dataArray.append("zipFile", fs.createReadStream(uploadFile.path));      
      
      /*
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
      */

      File.push(dataArray);
      console.log("xD: "+ dataArray);
      //await File.create(upload);
      return dataArray;
    },
  },
};

export default resolvers;
