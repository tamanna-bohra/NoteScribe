const mongoose = require('mongoose');
const mongoURI="mongodb://127.0.0.1:27017"

const connectToMongo = async () => {
    try {
      mongoose.set("strictQuery", false);
      mongoose.connect(mongoURI);
      console.log("Connected to Mongo Successfully!");
    } catch (error) {
      console.log(error);
      res.status(500).send("some error occurred");
    }
  };
module.exports= connectToMongo;