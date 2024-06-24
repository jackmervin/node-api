import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://mervinjacobofficial:UThLqOJo6mxM6OpI@cluster0.cdavvqh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("MongoDB Connected ...!");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

export default connectDB;
