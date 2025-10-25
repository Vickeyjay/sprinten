const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connection to be database has been establish ");
  } catch (error) {
    console.log(`there is an error connecting to the database ${error}`);
  }
};

module.exports = connectDB;
