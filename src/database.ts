import mongoose from "mongoose";

const initialize_db = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/user-app", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database is connected!!!");
  } catch (err) {
    console.log({ ...err });
  }
};

export default initialize_db;
