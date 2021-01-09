const mongoose = require("mongoose");
const schema = mongoose.Schema;

const regSchema = new schema({
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  University: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("RegData", regSchema);
