const mongoose = require("mongoose");

const Url =
  "mongodb+srv://Jinithya:200168803730j@cluster0.kmbulwt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async () => {
  try {
    await mongoose.connect(Url);
    console.log("Connected to the Database");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;