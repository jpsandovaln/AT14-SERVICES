const fetch = require("node-fetch");
require("dotenv").config("../../.env");


console.log(process.env.CONVERT_APP_URL);
console.log(process.env.MACHINE_APP_URL);

const resolvers = {
    Query: {
      files:()=> fetchFiles(process.env.CONVERT_APP_URL), 
      ML:()=> fetchFiles(process.env.MACHINE_APP_URL), 
    },
};

function fetchFiles(uri) {
    return fetch(uri)
      .then(res => res.json())
      .then(json => json.data);
}

module.exports= {
    resolvers,
};
