import shortid from "shortid";
import FormData from "form-data";
import axios from "axios";
import * as fs from "fs";
import {GraphQLUpload} from "graphql-upload";
import wget from "node-wget-promise";
import dotenv from "dotenv";

dotenv.config();

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
        files: async () => {
            const urlCVT = "" + process.env.CONVERTER_GET_DATA;
            const {data} = await axios.get(urlCVT);
            console.log({...data}+"here1")
            return data;
        },
    },
    Mutation: {
        uiToPdfImage: async (_, args) => {
            const uri = "" + process.env.DOCUMENT_SERVICE;

            const uploadFile = await processUpload(args.file);
            const dataArray = new FormData();

            dataArray.append("outputFormat", args.outputFormat);
            dataArray.append("outputSize", args.outputSize);
            dataArray.append("rotation", args.rotation);
            dataArray.append("quality", args.quality);
            dataArray.append("dubling", args.dubling);
            dataArray.append("paintEffect", args.paintEffect);
            dataArray.append("type", args.type);
            dataArray.append("file", fs.createReadStream(uploadFile.path));                        

            console.log(dataArray);

            /*
            const res = await axios.post(uri, dataArray, {
                headers: dataArray.getHeaders(),
            });            
            const result = {text: res.data};
            return result;                        
            */
            return [{}];
        },
        uiToImageText: async (_, args) => {
            const uri = "" + process.env.EXTRACTOR_SERVICE;

            const uploadFile = await processUpload(args.file);
            const dataArray = new FormData();
            dataArray.append("language", args.language);
            dataArray.append("file", fs.createReadStream(uploadFile.path));            
            
            const res = await axios.post(uri, dataArray, {
                headers: dataArray.getHeaders(),
            });            
            const result = {text: res.data};
            return result;            
        },
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
                maxContentLength: Infinity,
                maxBodyLength: Infinity,
                headers: dataArray1.getHeaders(),
            });

            console.log(res);

            await wget(res.data[0].filePath, {
                output:
                    "" + process.env.OUTPUT_FOLDER + res.data[0].name + ".zip",
            });
            const dataArray = new FormData();
            dataArray.append("searchWord", args.searchWord);
            dataArray.append("algorithm", args.algorithm);
            dataArray.append("percentage", args.percentage);
            dataArray.append(
                "zipFile",
                fs.readFileSync(
                    "" + process.env.OUTPUT_FOLDER + res.data[0].name + ".zip"
                ),
                res.data[0].name + ".zip"
            );

            const urlML = "" + process.env.CONVERTER_ANALIZEZIP;
            const res1 = await axios.post(urlML, dataArray, {
                maxContentLength: Infinity,
                maxBodyLength: Infinity,
                headers: dataArray.getHeaders(),
            });

            Array.prototype.push.apply(FileData1, res1.data);

            return FileData1;
        },

        videoConverter: async (_, args) => {
            fs.mkdir("images", {recursive: true}, (err) => {
                if (err) throw err;
            });

            const uploadFile = await processUpload(args.file);

            const dataArray = new FormData();
            dataArray.append("ratio", args.ratio);
            dataArray.append("scale", args.scale);
            dataArray.append("quality", args.quality);
            dataArray.append("angle", args.angle);
            dataArray.append("vflip", args.vflip);
            dataArray.append("hflip", args.hflip);
            dataArray.append("outputFormat", args.outputFormat);
            dataArray.append("audioFormat", args.audioFormat);
            dataArray.append("obtainFrames", args.obtainFrames);
            dataArray.append("frameScale", args.frameScale);
            dataArray.append("obtainAudio", args.obtainAudio);
            dataArray.append("checksum", args.checksum);
            dataArray.append("file", fs.createReadStream(uploadFile.path));
            dataArray.append("extractAudioFormat", args.extractAudioFormat);

            const urlML = "" + process.env.CONVERTER_VIDEO_CONVERTER;

            const res = await axios.post(urlML, dataArray, {
                maxContentLength: Infinity,
                maxBodyLength: Infinity,
                headers: dataArray.getHeaders(),
            });

            Array.prototype.push.apply(FileData, res.data);

            return FileData;
        },

        metaData: async (_, args) => {
            fs.mkdir("images", {recursive: true}, (err) => {
                if (err) throw err;
            });

            FileData = [];
            const uploadFile = await processUpload(args.file);

            const dataArray = new FormData();
            dataArray.append("file", fs.createReadStream(uploadFile.path));

            console.log(uploadFile.path)
            const urlML = "" + process.env.EXTRACTOR_METADATA_SERVICE;

            const res = await axios.post(urlML, dataArray, {
                maxContentLength: Infinity,
                maxBodyLength: Infinity,
                headers: dataArray.getHeaders(),
            });
            let data =  res.data
            console.log(data)
            return data;
        },
    },
};

export default resolvers;
