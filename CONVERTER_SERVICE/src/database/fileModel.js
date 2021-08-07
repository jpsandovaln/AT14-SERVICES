const mongoose = require("mongoose");

const FileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  filePath: {
    type: String,
    required: true,
  },
  checksum: {
    type: String,
    required: true,
  },
});

const FileModel = mongoose.model("File", FileSchema );

module.exports = FileModel;
