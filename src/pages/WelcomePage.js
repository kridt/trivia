import {Link} from "@reach/router";
var currentScore = localStorage.getItem("currentScore")
localStorage.setItem("currentScore", currentScore)

var highscore = localStorage.getItem("highscore")



/* function resetHighscore() {
    localStorage.setItem("highscore", 0);
}
*/

export default function WelcomePage() {
    
    var difficulties = ["easy", "medium", "hard"]
    
    var score = localStorage.getItem("currentScore");
    
    
    var difficultySelect = document.querySelector(".difficulty");
    
    difficultySelect?.addEventListener("change", function(e){
       
        localStorage.setItem("difficulty", difficultySelect?.value);
        e.preventDefault();
        console.log(difficultySelect?.value);
        
    })
    
    
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
            <option>Select</option>
            {difficulties.map(function(result) {
                return(
                    <option className="difficultyOption" key={result}>{result}</option>
                )
            })}
        </select>
        </div>
        </>
    )
} 