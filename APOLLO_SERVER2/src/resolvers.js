import shortid from 'shortid';
import FormData from 'form-data';
import axios from 'axios';
import * as fs from 'fs';

import { GraphQLUpload } from 'graphql-upload';


// import File from './fileModel';

const FileData = [];

const storeUpload = async ({ stream, filename, mimetype }) => {
  const id = shortid.generate();
  //const path = `images/${id}-${filename}`;
  const path = `images/${filename}`;
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
      return await FileData;
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
      const urlML = "http://localhost:8080/analizeZip";
      console.log(urlML);
      const res = await axios.post(urlML, dataArray, {
        headers: dataArray.getHeaders()
      });
      
      /*
      const AUX = [
        {
          Algorithm: 'MobilNet',
          Word: 'golden retriever',
          Percentage: 0.21106846630573273,
          Second: '00:00:02',
          PathImage: 'http://localhost:8080/unZipFiles/1630296958395images/images/2.jpg'
        },
        {
          Algorithm: 'MobilNet',
          Word: 'Border collie',
          Percentage: 0.9047021269798279,
          Second: '00:00:03',
          PathImage: 'http://localhost:8080/unZipFiles/1630296958395images/images/3.jpg'
        },
        {
          Algorithm: 'MobilNet',
          Word: 'German shepherd, German shepherd dog, German police dog, alsatian',
          Percentage: 0.9990766048431396,
          Second: '00:00:04',
          PathImage: 'http://localhost:8080/unZipFiles/1630296958395images/images/4.jpg'
        }
      ];
      */
      // FileData.push(res.data);
      // Array.prototype.push.apply(FileData, AUX);
      Array.prototype.push.apply(FileData, res.data);
      //FileData.push(AUX);
      console.log(FileData);
      //await File.create(upload);
      return FileData;
    },
  },
};

export default resolvers;
