const fetch = require("node-fetch");

const resolvers = {
    Query: {
      files:()=> fetchFiles()
    },
};

function fetchFiles() {
    return fetch("http://localhost:8080/file/")
      .then(res => res.json())
      .then(json => json.data);
}

module.exports= {
    resolvers,
};
