import mongoose, { Schema, model } from "mongoose";

const schema = new Schema({
  title: String,
  desc: String,
});

// Create your model

const Movie = model("Movie", schema);

export default Movie;
