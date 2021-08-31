const fetch = require("node-fetch");
require("dotenv").config("../../.env");

console.log(process.env.CONVERT_APP_URL);
console.log(process.env.MACHINE_APP_URL);

const filesStatic = [
  {
  _id : "6123bc235836f569989f3e79", 
  name : "y2mate.com - Rebelion en la Granja 1999 Trailer_v240P.mp4",
  path : "C:/Users/Jc_Ze/Documents/AT14-SERVICES/CONVERTER_SERVICE/resources/upl...",
  checksum : "c89981ccfd5ca1d48e84535cf80639c0",
  myfile: null,
  }
];

const resolvers = {
    //Upload: GraphQLUpload,
    Query: {
      files:()=> fetchFilesStatic(process.env.CONVERT_APP_URL), 
      ML:()=> fetchFiles(process.env.MACHINE_APP_URL), 
    },
    Mutation: {

      updateFiles: (_, args) => {
        let file = filesStatic.find((file) => file._id == args._id);
        if (file) {
          file.name = args.name;
          file.checksum = args.checksum;
          return file;
        }
      },

      addFiles: async (_, args) => {
        const { createReadStream, filename, mimetype, encoding } = await args.myfile;
        /*
        const stream = createReadStream();
        const out = require('fs').createWriteStream('local-file-output.txt');
        stream.pipe(out);
        await finished(out);
        */
        console.log(filename)
        file = {
          _id : new Date().getTime(), 
          name : args.name,
          path : filename,
          checksum : args.checksum,
          myFile: null,
        }  
        filesStatic.push(file);        
        return file;
      },      
    },    
};

function fetchFilesStatic(uri){
  return filesStatic;
}

function fetchFiles(uri) {
    return fetch(uri)
      .then(res => res.json())
      .then(json => json.data);
}

module.exports= {
    resolvers,
};
