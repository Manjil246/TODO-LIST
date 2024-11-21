const mongoose = require("mongoose");

const connectToMongo = () => {
  const mongoURI = process.env.MONGO_URI;
  console.log("mongoURI", mongoURI);
  mongoose
    .connect(mongoURI)
    .then(() => {
      console.log("Connected to mongoDB Successfully");
    })
    .catch((e) => {
      console.log(e);
    });
};

module.exports = connectToMongo;
