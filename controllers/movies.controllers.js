import Movie from "../model/movie.model.js";

export const MovieIndex = async (req, res) => {
  try {
    const GetMovie = await Movie.find();
    res.json(GetMovie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const MovieGetById = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (movie == null) {
      return res.status(404).json({ message: "Movie Not Found" });
    } else {
      res.json(movie);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const MovieCreat = async (req, res) => {
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
