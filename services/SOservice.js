import axios from "axios";



const fetchQuestions = async ()=>{
    const URL = "https://api.stackexchange.com/2.3/questions?order=desc&sort=votes&site=stackoverflow"

    const response = await axios.get(URL);
    return response.data.items.map((item) => ({
        title: item.title,
        body: item.body || "",
        tags: item.tags,
        is_answered: item.is_answered,
        score: item.score,
        created_at: new Date(item.creation_date * 1000),
        answers_count: item.answer_count,
      }));
    // console.log(arr);
    
}

// fetchQuestions()
export default fetchQuestions