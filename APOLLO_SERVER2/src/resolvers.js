import shortid from "shortid";
import FormData from "form-data";
import axios from "axios";
import * as fs from "fs";
import {GraphQLUpload} from "graphql-upload";
import wget from "node-wget-promise";
import dotenv from 'dotenv'
dotenv.config()

let FileData = [];
let FileData1 = [];

const storeUpload = async ({stream, filename, mimetype}) => {
    const id = shortid.generate();
    const path = `images/${filename}`;

    return new Promise((resolve, reject) =>
        stream
            .pipe(fs.createWriteStream(path))
            .on("finish", () => resolve({id, path, filename, mimetype}))
            .on("error", reject)
    );
};

const processUpload = async (upload) => {
    const {createReadStream, filename, mimetype} = await upload;
    const stream = createReadStream();
    const file = await storeUpload({stream, filename, mimetype});
    return file;
};

const resolvers = {
    Upload: GraphQLUpload,
    Query: {
        machines: async () => {
            return await FileData;
        },
        VideoConverter: async () => {
            return await FileData1;
        },
    },
    Mutation: {
        uploadFileML: async (_, args) => {
            fs.mkdir("images", {recursive: true}, (err) => {
                if (err) throw err;
            });

            const uploadFile = await processUpload(args.file);

            const dataArray = new FormData();
            dataArray.append("searchWord", args.searchWord);
            dataArray.append("algorithm", args.algorithm);
            dataArray.append("percentage", args.percentage);
            dataArray.append("zipFile", fs.createReadStream(uploadFile.path));

            const urlML = "" + process.env.CONVERTER_ANALIZEZIP;
            console.log(urlML);
            const res = await axios.post(urlML, dataArray, {
                headers: dataArray.getHeaders(),
            });

            Array.prototype.push.apply(FileData, res.data);

            return FileData;
        },

        uiToVideoConverter: async (_, args) => {
            fs.mkdir("images", {recursive: true}, (err) => {
                if (err) throw err;
            });
            FileData1 = [];
            const uploadFile = await processUpload(args.file);
            const dataArray1 = new FormData();
            dataArray1.append("file", fs.createReadStream(uploadFile.path));
            dataArray1.append("obtainFrames", "true");
            dataArray1.append("frameScale", "400");
            dataArray1.append("grayScale", "true");
            const urlML1 = "" + process.env.CONVERTER_FRAMES;
            const res = await axios.post(urlML1, dataArray1, {
                headers: dataArray1.getHeaders(),
            });

            await wget(res.data[0].filePath,{
                output: ""+process.env.OUTPUT_FOLDER+res.data[0].name+".zip"
              });

            const dataArray = new FormData();
            dataArray.append("searchWord", args.searchWord);
            dataArray.append("algorithm", args.algorithm);
            dataArray.append("percentage", args.percentage);
            dataArray.append("zipFile", fs.readFileSync(""+process.env.OUTPUT_FOLDER+res.data[0].name+".zip"), res.data[0].name+".zip");

            const urlML = "" + process.env.CONVERTER_ANALIZEZIP;
            const res1 = await axios.post(urlML, dataArray, {
                headers: dataArray.getHeaders(),
            });

            Array.prototype.push.apply(FileData1, res1.data);
            console.log(FileData1);

            return FileData1;
        },
    },
};

export default resolvers;
