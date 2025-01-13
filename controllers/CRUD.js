// import Loadquestions from "./Loadquestions";
import Questions_schema from "../models/question_schema.js";
import { v4 as uuidv4 } from 'uuid';


const getQuestionsByID = async (req, res) => {
    try {
    //   const { stackOverflowId } = req.params;
  
      // Use an object to search by stackOverflowId
      const questionById = await Questions_schema.findOne({ stackOverflowId: req.params.id });
  
      if (!questionById) {
        return res.status(404).json({ message: "Question not found" });
      }
  
      res.status(200).json({ message: "Question found", question: questionById });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  };
  

const createQuestion = async (req,res)=>{
    try{
    const newQuestion = {
        ...req.body,
        stackOverflowId:uuidv4()
    }

    const dataStored = await Questions_schema.create(newQuestion)
    res.status(201).json(dataStored);
} catch (error) {
  console.error(error);
  res.status(500).send('Error creating question');
}
}


const updateQuestion = async (req, res) => {
    // const { stackOverflowId } = req.params;  // Corrected destructuring
    try {
      // Find and update the question by stackOverflowId
      const updatedQuestion = await Questions_schema.findOneAndUpdate(
        { stackOverflowId: req.params.id },
        req.body,
        { new: true }
      );
  
      if (!updatedQuestion) return res.status(404).send('Question not found');
      res.json(updatedQuestion);
    } catch (error) {
      res.status(500).send('Error updating question');
    }
  };
  
  const deletebyId = async (req, res) => {
    const { id } = req.params;  // Destructuring from params
  
    try {
      // Find and delete the question by stackOverflowId
      const deletedQuestion = await Questions_schema.findOneAndDelete({ stackOverflowId: id });
  
      if (!deletedQuestion) return res.status(404).send('Question not found');
      res.status(200).json({m:"success deleted",deletedQuestion });
      console.log(deletedQuestion)
    } catch (error) {
      res.status(500).send('Error deleting question');
    }
  };
  
  export { getQuestionsByID, updateQuestion, createQuestion, deletebyId };
  