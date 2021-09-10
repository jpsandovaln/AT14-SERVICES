import mongoose from "mongoose";

function connectMongoDB (connectionPath){
  mongoose.connect(connectionPath,{ useNewUrlParser: true, useUnifiedTopology: true })
  .then(db => console.log('Db is connected to', db.connection.host))
  .catch(err=> console.error(err));
};

export default connectMongoDB;
