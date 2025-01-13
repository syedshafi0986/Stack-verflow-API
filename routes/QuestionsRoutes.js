import express from "express";

import { getQuestions } from "../controllers/QuestionsController.js";
import Loadquestions from "../controllers/Loadquestions.js";
import { getQuestionsByID,createQuestion,updateQuestion,deletebyId } from "../controllers/CRUD.js";

const router = express.Router();

// Route for loading questions into the database
router.post("/load", Loadquestions); 

// Route for retrieving questions with filtering, sorting, and pagination
router.get("/", getQuestions);

//  CRUD routes
router.get("/:id",getQuestionsByID)
router.post("/",createQuestion)
router.put("/:id",updateQuestion)
router.delete("/:id",deletebyId)

export default router;
