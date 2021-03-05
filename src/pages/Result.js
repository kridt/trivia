import { Link } from "@reach/router";


export default function Result(props) {
    var score = localStorage.getItem("currentScore");
    var highscore = localStorage.getItem("highscore");
    var answer = localStorage.getItem("answer");
    var guess = props.result;
    
    if (guess === answer) {
        var theResult = "Correct";
        localStorage.setItem("currentScore", Number(score) + 100);
        
    } else {
        var theResult = "Incorrect"
        localStorage.setItem("currentScore", 0);
    }

    if (theResult === "Incorrect") {
        var rightAnswer = ` The right answer was ${answer}`;
    } else {
        var rightAnswer = "";
    }


    
    var prevCategory = localStorage.getItem("categoryId");
    var newScore = localStorage.getItem("currentScore");
    
    console.log(newScore);
    if (newScore > highscore) {
        localStorage.setItem("highscore", newScore)
    } else{
        localStorage.setItem("highscore", highscore)
    }
    return(
        <>

        <h1>Your answer was {theResult}</h1>
        <h2>{rightAnswer}</h2>
        <h1>New score: {newScore}</h1>
        <Link style={{display: "block"}} to={`/questions/${prevCategory}`}>Next question</Link>
        <Link style={{display: "block"}} to="/category">Try another category</Link>
        <Link to="/">Back to start</Link>
        </>
    )
}