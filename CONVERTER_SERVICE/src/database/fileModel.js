const mongoose = require("mongoose");

const FileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  path: {
    type: String,
  },
  checksum: {
    type: String,
  },
});

const FileModel = mongoose.model("File", FileSchema );

module.exports = FileModel;
