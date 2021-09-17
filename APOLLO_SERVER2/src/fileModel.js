import mongoose from "mongoose";

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

const File = mongoose.model("File", FileSchema);

export default File;
