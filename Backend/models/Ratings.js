const mongoose = require("mongoose")

const Rating = mongoose.Schema(
    {
        itemId: String,
        rating: Number,
       // review: String,
        userId: String
    },
    {
        timestamps: true
    }
)

const Ratings = mongoose.model("Ratings", Rating)

module.exports = Ratings