import Questions_schema from "../models/question_schema.js";

//the core feature
const getQuestions = async (req,res)=>{
    try{
    const {is_answered,tags,sort,ans_count__gt,ans_count__lt,page=1} = req.query;
    let filter={}
    if(is_answered){
        console.log(typeof(is_answered));
        filter.is_answered = is_answered === "true"
    }
    if(tags){
        filter.tags = {$all:tags.split(",")}
        console.log(filter)
    }
    if(ans_count__gt){
        filter.answers_count = {...filter.answers_count,$gte:+ans_count__gt}    
    }
    if(ans_count__lt){
        filter.answers_count = {...filter.answers_count,$gte:+ans_count__lt}    
    }
    let sortOptions = {}
    if(sort === "score"){
        sortOptions={score:-1}
    }
    else if(sort === "created_at"){
        sortOptions={created_at:-1}
    }
    else{
        sortOptions={}
    }

    const questions = await Questions_schema.find(filter)
    .sort(sortOptions)
    .skip((page - 1) *10)
    .limit(10)
    // .lean()
    // Questions_schema.find({ is_answered: true }).pretty();
    // Without any filters
const questionss = await Questions_schema.find().lean();
console.log("All questions:", questionss);


    console.log(questions)
    res.status(200).json(questions);
} catch (error) {
  res.status(500).json({ error: error.message });
}
};

export {getQuestions}



