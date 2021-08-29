import { ApolloServer } from 'apollo-server-express';
import { graphqlUploadExpress } from "graphql-upload";
import express from 'express';
import cors from 'cors';
import path from 'path';
import bodyParser from 'body-parser';

import typeDefs from './typeDefs.js';
import resolvers from './resolvers.js';


const app = express();



// Import your database configuration
// import connect from './db';

export default (async function () {
  try {
    /*  
        await connect.then(() => {
        console.log('Connected 🚀 To MongoDB Successfully');
        });
    */
    /*    
    const server = new ApolloServer({
      typeDefs,
      resolvers,
    });
    */

    const server = new ApolloServer({
        uploads: false, // Disables the bundled ApolloServer old graphql-upload that doesn't work on NodeJS 14
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
