import Movie from "../model/movie.model.js";

export const MovieIndex = async (req, res) => {
  try {
    const cId = req.query.cId;
    const title = req.query.title;
    const desc = req.query.desc;
    let query = {};
    if (cId) {
      query.cId = parseInt(cId);
    }
    if (title) {
      query.title = { $regex: title, $options: "i" };
    }
    if (desc) {
      query.desc = { $regex: desc, $options: "i" };
    }
    // const GetMovie = await Movie.findOne({
    //   cId: req.query.cId,
    // });
    const GetMovie = await Movie.find(query);
    res.json(GetMovie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// export const MovieGetById = async (req, res) => {
//   try {
//     const movie = await Movie.findById(req.params.id);
//     console.log(movie);
//     if (movie == null) {
//       return res.status(404).json({ message: "Movie Not Found" });
//     } else {
//       res.json(movie);
//     }
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };

// export const MovieGetById = async (req, res) => {
//   try {
//     const movie = await Movie.findOne({ cId: req.params.id });

//     if (movie == null) {
//       return res.status(404).json({ message: "Movie Not Found" });
//     } else {
//       res.json(movie);
//     }
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };

export const MovieGetById = async (req, res) => {
  try {
    const movie = await Movie.findOne({ cId: req.params.id });

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
  const GetMovie = await Movie.find();
  const sort = await GetMovie.sort((a, b) => {
    const num1 = a.cId;
    const num2 = b.cId;
    return num2 - num1;
  });

  //Validate your data
  const newMovie = new Movie({
    cId: sort[0].cId + 1,
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

export const MovieUpdate = async (req, res) => {
  try {
    const updateMovie = await Movie.findOneAndUpdate(
      { _id: req.params.id },
      { title: req.body.title, desc: req.body.desc },
      { new: true }
    );
    res.status(200).json(updateMovie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const MovieDelete = async (req, res) => {
  const movieId = req.params.cId;
  try {
    await Movie.find().deleteOne({ cId: movieId });
    res.json({ message: "Movie  deleted!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
