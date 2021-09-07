import mongoose from "mongoose";
// const mongoose = require("mongoose");

const FileSchema = new mongoose.Schema({
  _id: {
    type: String,
  },
  name: {
    type: String,
  },
  path: {
    type: String,
  },
  checksum: {
    type: String,
  },
});

const File = mongoose.model("files", FileSchema);

export default File;
