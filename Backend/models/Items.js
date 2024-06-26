const mongoose = require("mongoose");

const MenuItem = mongoose.Schema(
  {
    itemId: String,
    itemName: String,
    Description: String,
    Price: Number,
    category: String,
    country: String,
    image: String,
    availability: String,
    averageRating: Number
  },
  {
    timestamps: true,
  }
);

const Items = mongoose.model("Items", MenuItem);

module.exports = Items;