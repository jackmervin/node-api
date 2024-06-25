import express from "express";
import {
  MovieCreat,
  MovieDelete,
  MovieGetById,
  MovieIndex,
  MovieUpdate,
} from "../controllers/movies.controllers.js";

const router = express.Router();

//R - for Reading
router.get("/", MovieIndex);

//GET by Id
router.get("/:id", MovieGetById);

//C - for Create
router.post("/", MovieCreat);

//U - for Update
router.put("/:id", MovieUpdate);

//D - for Delete
router.delete("/:id", MovieDelete);

export default router;
