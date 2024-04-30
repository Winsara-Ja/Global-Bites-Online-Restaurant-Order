const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const deliverySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: false,
  },
  time: {
    type: String,
    required: false,
  },
  location: {
    type: String,
    required: false,
  },
  status: {
    type: String,
    required: false,
  },
  done: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Delivery", deliverySchema);
