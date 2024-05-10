const mongoose = require("mongoose");

const cateringschema = mongoose.Schema(
  {
    UserID: String,
    UserName: String,
    Date: String,
    Location: String,
    Headcount: String,
    Special_request: String,
    Menu_id: Number,
    Price: Number,
    Status: {
      type: String,
      default: "Processing",
    },
  },
  {
    timestamps: true,
  }
);

const cateringmodel = mongoose.model("catering", cateringschema);

module.exports = cateringmodel;
