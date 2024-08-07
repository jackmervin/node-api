import mongoose, { Schema, model } from "mongoose";

const schema = new Schema({
  cId: { type: Number },
  title: {
    type: String,
    required: true,
    unique: true,
  },
  desc: String,
});

// Create your model

const Movie = model("Movie", schema);

export default Movie;
