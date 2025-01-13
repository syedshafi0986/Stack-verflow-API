import mongoose, { Query } from "mongoose";


const Questions = mongoose.Schema({
    stackOverflowId:{type:String,unique:true},
    title: { type: String, required: true },

    body: String,
    tags: [String],
    is_answered: Boolean,
    score: Number,
    created_at: Date,
    answers_count: Number,
})

const Questions_schema = mongoose.model("questions",Questions)
export default Questions_schema;