import shortid from "shortid";
import FormData from "form-data";
import axios from "axios";
import * as fs from "fs";
import { GraphQLUpload } from "graphql-upload";

const FileData = [];

const storeUpload = async ({ stream, filename, mimetype }) => {
    const id = shortid.generate();
    const pathOLD = `images/${id}-${filename}`;
    const path = `images/${filename}`;

    return new Promise((resolve, reject) =>
        stream
            .pipe(fs.createWriteStream(path))
            .on("finish", () => resolve({ id, path, filename, mimetype }))
            .on("error", reject)
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
        }
    },
    Mutation: {
        uploadFileML: async (_, args) => {
            fs.mkdir("images", { recursive: true }, (err) => {
                if (err) throw err;
            });

            const uploadFile = await processUpload(args.file);
            const dataArray = new FormData();
            dataArray.append("searchWord", args.searchWord);
            dataArray.append("algorithm", args.algorithm);
            dataArray.append("percentage", args.percentage);
            dataArray.append("zipFile", fs.createReadStream(uploadFile.path));

            const urlML = "http://container_ml:8085/analizeZip";
            console.log(urlML);
            const res = await axios.post(urlML, dataArray, {
                headers: dataArray.getHeaders()
            });

            Array.prototype.push.apply(FileData, res.data);

            return FileData;
        }
    }
};

export default resolvers;
