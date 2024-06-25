import Movie from "../model/movie.model.js";

export const MovieIndex = (req, res) => {
  // res.send("Reade movies details");
};

export const MovieCreat = async (req, res) => {
  // res.send("Create the  movies ");
  console.log(req.body);

  //Validate your data
  const newMovie = new Movie({
    title: req.body.title,
    desc: req.body.desc,
  });

  //Save your data
  try {
    const movie = await newMovie.save();
    return res.status(400).json(movie);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const MovieUpdate = (req, res) => {
  res.send("Update the movies ");
};

export const MovieDelete = (req, res) => {
  res.send("delete the movies ");
};
