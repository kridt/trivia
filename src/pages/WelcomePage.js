import {Link} from "@reach/router";
var currentScore = localStorage.getItem("currentScore")
localStorage.setItem("currentScore", currentScore)


var highscore = localStorage.getItem("highscore")

console.log(highscore);

/* function resetHighscore() {
    localStorage.setItem("highscore", 0);
}
 */

export default function WelcomePage() {
    
    var difficulties = ["Easay", "medium", "hard"]

    var score = localStorage.getItem("currentScore");


   
    
    return(
        <>
            <h1>Press on the start button</h1>
        <Link to="/category">
        <h1>Start</h1>
        </Link>

        <h1>Your current score: {score}</h1>
        <h1>highscore: {highscore}</h1>
        <button /* onClick={resetHighscore()} */>Reset highscore</button>
        <div>
        <h1>Select difficulty</h1>
        <select className="difficulty">
            {difficulties.map(function(result) {
                return(
                    <option key={result}>{result}</option>
                )
            })}
        </select>
        </div>
        </>
    )
} 