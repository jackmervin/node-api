export const MovieIndex = (req, res) => {
  // res.send("Reade movies details");
};

export const MovieCreat = (req, res) => {
  // res.send("Create the  movies ");
  console.log(req.body);

  return res.json(req.body);
};

export const MovieUpdate = (req, res) => {
  res.send("Update the movies ");
};

export const MovieDelete = (req, res) => {
  res.send("delete the movies ");
};
