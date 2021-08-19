const fetch = require("node-fetch");
require("dotenv").config("../../.env");

const resolvers = {
    Query: {
      files:()=> fetchFiles()
    },
};

function fetchFiles() {
    return fetch(process.env.CONVERT_APP_URL)
      .then(res => res.json())
      .then(json => json.data);
}

module.exports= {
    resolvers,
};
