import mongoose from "mongoose";
import apolloCode from "./common/codeApolloError.js";
import statusCode from "./common/statusCode.js";

function connectMongoDB(connectionPath) {
  mongoose
    .connect(connectionPath, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((db) => console.log("Db is connected to", db.connection.host))
    .catch((err) => {
      throw new MongoConnectionException(
        err.message,
        statusCode,
        apolloCode.APOLLO_ERROR_02
      );
    });
}

export default connectMongoDB;
