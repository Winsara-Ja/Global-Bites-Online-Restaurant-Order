const mongoose = require("mongoose");

const cateringschema = mongoose.Schema(
  {
    Date: String,
    Location: String,
    Dilivery_options: String,
    Headcount: String,
    Special_request: String,
    Menu_id: Number,
  },
  {
    timestamps: true,
  }
);

const cateringmodel = mongoose.model("catering", cateringschema);

module.exports = cateringmodel;
