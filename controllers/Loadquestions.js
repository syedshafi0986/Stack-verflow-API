import axios from "axios";
import Questions_schema from "../models/question_schema.js"; // Replace with your schema path

const Loadquestions = async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&site=stackoverflow"
    );

    // Map and prepare data for MongoDB
    const questions = response.data.items.map((item) => ({
    stackOverflowId: item.question_id,
      title: item.title,
      body: item.body || "",
      tags: item.tags,
      is_answered: item.is_answered,
      score: item.score,
      created_at: new Date(item.creation_date * 1000),
      answers_count: item.answer_count,
    }));
    console.log("Mapped Questions:", questions.stackOverflowId);


    // Insert questions into the database
    // await Questions_schema.deleteMany({});

    await Questions_schema.insertMany(questions);
    // console.log(questions.stackOverflowId)
    // console.log(response.data.items);
    
    res.status(201).json({ message: "Questions loaded successfully", count: questions.length,id:questions[0].stackOverflowId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to load questions" });
  }
};

export default Loadquestions;
