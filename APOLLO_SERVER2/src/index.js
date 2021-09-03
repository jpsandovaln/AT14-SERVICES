import { ApolloServer } from 'apollo-server-express';
import { graphqlUploadExpress } from "graphql-upload";
import express from 'express';
import cors from 'cors';
import path from 'path';
import bodyParser from 'body-parser';
import typeDefs from './typeDefs.js';
import resolvers from './resolvers.js';

const app = express();

export default (async function () {
  try {
    const server = new ApolloServer({
      uploads: false,
      typeDefs,
      resolvers,
    });
    await server.start();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(graphqlUploadExpress({ maxFileSize: 1000000000, maxFiles: 10 }));

    const dir = path.join(process.cwd(), 'images');
    console.log(dir);
    app.use(express.static(dir));
    app.use('/images', express.static(dir));
    app.use( bodyParser.json({limit: '50mb'}) );
    app.use(bodyParser.urlencoded({
      limit: '50mb',
      extended: true,
      parameterLimit:50000
    }));

    app.use(cors('*'));
    server.applyMiddleware({ app });

    await new Promise((resolve) => app.listen({ port: 4000 }, resolve));
    console.log(
      `🚀 Server ready at http://localhost:4000${server.graphqlPath}`
    );

  } catch (err) {
    console.error(err);
  }
})();
