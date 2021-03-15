import { Link } from "@reach/router";


export default function Result(props) {
    var score = localStorage.getItem("currentScore");
    var answer = localStorage.getItem("answer");
    var guess = props.result;
    
    if (guess === answer) {
        var theResult = "Correct";
        localStorage.setItem("currentScore", Number(score) + 100);
        
    } else {
        theResult = "Incorrect"
        localStorage.setItem("currentScore", 0);
    }

    if (theResult === "Incorrect") {
        var rightAnswer = ` The right answer was ${answer}`;
    } else {
        rightAnswer = "";
    }


    
    var prevCategory = localStorage.getItem("categoryId");
    
    return(
        <>

        <h1>Your answer was {theResult}</h1>
        <h2>{rightAnswer}</h2>
        <h1>New score: {score}</h1>
        <Link style={{display: "block"}} to={`/questions/${prevCategory}`}>Next question</Link>
        <Link style={{display: "block"}} to="/category">Try another category</Link>
        <Link to="/">Back to start</Link>
        </>
    )
}