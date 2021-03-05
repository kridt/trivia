/* import { Link } from "@reach/router"; */
import axios from "axios";
import { useEffect, useState } from "react";

export default function Questions(props) {
    
    var [question, setQuestion] = useState({});
    
    useEffect(
        function () {
            axios.get(`https://opentdb.com/api.php?amount=1&category=${props.id}&type=multiple`)
            .then(response => setQuestion(response.data.results));
            
        },
        [setQuestion, props.id]
        ) 
        
        /* var displayQuestion = document.querySelector(".theQuestion"); */
        var theQuestion = question;
        
         
        console.log(theQuestion);
         
         
             /* var correctAnswer = theQuestion?.correct_answer;
             var incorrectAnswers = theQuestion?.incorrect_answers;
             incorrectAnswers?.push(correctAnswer);
             var options = incorrectAnswers;
              */
                
    return(
        <>
        <h1>{question[0]?.category}</h1>

        <p className="theQuestion"></p>
        
        <ul>
             {/* {answerOptions?.map(function (result) {
                console.log(result);

                return(
                    <li>{result}</li>
                )
            })}  */}
        </ul>
            
        </>


    )
}