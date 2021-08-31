const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const app = express();
const { createWriteStream } = require("fs");
const cors = require("cors");

app.use(cors());

const typeDefs = gql`
  type Query {
    saludo: String
  }
  type Mutation {
    singleUpload(file: Upload): String
  }
`;

const saveImagesWithStream = ({ filename, mimetype, stream }) => {
  const path = `imagenes/${filename}`;
  return new Promise((resolve, reject) =>
    stream
      .pipe(createWriteStream(path))
      .on("finish", () => 
        {
            console.log(path);
            resolve({ path, filename, mimetype })
        }  
      )
      .on("error", reject)
  );
};
const resolvers = {
  Query: {
    saludo: () => {
      return "Hola bienvenido";
    },
  },
  Mutation: {
    singleUpload: async (_, args) => {
      const { filename, mimetype, createReadStream } = await args.file;
      console.log(args.file);
      const stream = createReadStream();
      console.log(stream);
      await saveImagesWithStream({ filename, mimetype, stream });
      return "singleUpload";
    },
  },
};

const server = new ApolloServer({ typeDefs: typeDefs, resolvers: resolvers });

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () => {
  console.log(
    `Servidor Graphql en el puerto http://localhost:4000${server.graphqlPath}`
  );
});
