import express from "express";
import mongoose from "mongoose";
import router from "./routes/QuestionsRoutes.js";
import dotenv from "dotenv";

const app = express();
const PORT = 5000;
dotenv.config();

// Middleware for JSON parsing
app.use(express.json());

// MongoDB Connection

// const DBURI = "mongodb+srv://shafi02367:saniyafathima7287@maincluster.ktis8.mongodb.net/StackOverflow?retryWrites=true&w=majority&appName=mainCluster"

mongoose
  .connect(process.env.DBURI, {
    
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log(error));

// Routes
app.use("/questions", router);

app.get("/",(req,res)=>{
    res.send("responding")
})
// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

export default app;