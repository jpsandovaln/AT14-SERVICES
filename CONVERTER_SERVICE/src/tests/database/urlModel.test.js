const mongoose = require("mongoose");
const Url = require("../../database/url_model");

test("urlSchema is created", () => {
    const schemaTest = new mongoose.Schema({
        name: {
          type: String,
          required: true,
        },
        url:{
          type: String,
          required: true,
        },
      });
    const expected = mongoose.model("UrlTest", schemaTest );
    expect(Url['schema']['obj']).toStrictEqual(expected['schema']['obj']);
});