const questionAnswerPrompt = (role,experience, topicsToFocus , numberOfQuestions) =>( `
    You are an AI trained to generate technical interview questions and answers.

    Task:
    -Role :${role}
    -Candidate Experience : ${experience} years
    -Focus Topics : ${topicsToFocus}
    -Write ${numberOfQuestions} interview questions.
    -For each question , generate a detailed but begginer-friendly-answer.
    -If the answer needs a code example , add a small code to block inside.
    -Keep formatting very clean.
    -Return a pure JSON array like:
    [
    {
    "question" :"Question here?",
    "answer" : "Answer here."
    },
    ...
    
    ]
Important : Do NOT add any extra text. Only return valid JSON.

`);

const conceptExplainPrompt = (question) =>( 
    `
    Your are an AI trained to generate exlanations for a given interview question

    Task:
    -Explain the following interview question and its concept in depth as if you're teaching a biginner developer.
    -Question : "${question}"
    -After the explanation , provide a short and clear title that summarizes the concept for the article page header.
    -If the explanation includes a code example , provide a small code block.
    -Keep the formatting very clean and clear.
    -Return the result as a valid JSON object in the follwing format:
    {
    "title":"Short title here?"
    "explanation":"Explanation here."
    }
    Important : DO NOT add any extra text outside the JSON format.Only return valid JSON.
    `
);

module.exports = {questionAnswerPrompt , conceptExplainPrompt};