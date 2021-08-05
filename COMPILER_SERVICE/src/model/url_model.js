const mongoose = require('mongoose');

const UrlSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    url:{
      type: String,
      required: true,
    },
});
  
const Url = mongoose.model("Url", UrlSchema );

module.exports = Url;
