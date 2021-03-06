/* import { Link } from "@reach/router"; */
import { Link } from "@reach/router";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Questions(props) {

    var score = localStorage.getItem("currentScore");
    var [question, setQuestion] = useState({});
    var difficulty = localStorage.getItem("difficulty")
    localStorage.setItem("categoryId", props.id)
    
    useEffect(
        function () {
            console.log(difficulty);
            axios.get(`https://opentdb.com/api.php?amount=1&category=${props.id}&type=multiple&difficulty=${difficulty}`)
            .then(response => setQuestion(response.data.results));
            
        },
        [setQuestion, props.id]
        ) 

        var correctQuestionFormat = question[0]?.question.replaceAll("&quot;", `"`).replaceAll("&#039;", "'").replaceAll("&rsquo;", "’")
        
        var theQuestion = question[0];
        
        var correctAnswer = theQuestion?.correct_answer;
        var incorrectAnswers = theQuestion?.incorrect_answers;
        
        
        var options = incorrectAnswers?.concat(correctAnswer);
        
        options?.sort(function (a, b){ return 0.2 - Math.random() })
        
        var shuffle1 = options?.sort(function (a, b){ return 0.2 - Math.random() })
        var shuffle2 = options?.sort(function (a, b){ return 0.5 - Math.random() })
        var shuffleMethod = [shuffle1, shuffle2];
        
        Math.floor(Math.random() * shuffleMethod.length);
        
        

        console.log(`%c ${correctAnswer}`, 'color: #bada55'); 
        localStorage.setItem("answer", correctAnswer);
        return(
            <>
        <h1>{question[0]?.category}</h1>

        <p className="theQuestion">{correctQuestionFormat}</p>
        
        
              {options?.map(function(result) {
                  return(
                      <Link style={{display: "block"}} to={"/result/" + result} key={result}>{result}</Link>

                  )
             })} 
        
            <h1>Score: {score}</h1>
        </>


)
}