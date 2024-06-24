import express from "express";
import {
  MovieCreat,
  MovieDelete,
  MovieIndex,
  MovieUpdate,
} from "../controllers/movies.controllers.js";

const router = express.Router();

//R - for Reading
router.get("/", MovieIndex);

//C - for Create
router.post("/", MovieCreat);

//U - for Update
router.put("/", MovieUpdate);

//D - for Delete
router.delete("/", MovieDelete);

export default router;
