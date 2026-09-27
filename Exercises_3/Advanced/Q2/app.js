const Names = ["Ben", "Joel", "Judy", "Anne"];
const Scores = [88, 98, 77, 88];

const $ = (id) => { return document.getElementById(id) };

$("name").focus ();

const addScore = () => {
    const name = $("name").value;
    const score = Number ($("score").value);

    $("name").value = "";
    $("score").value = "";

    $("name").focus ();

    if (!name || name.trim () === "")
    {
        alert ("You must enter a name and a valid score")
        return ;
    }
    
    if (score < 0 || score > 100 || isNaN (score))
    {
        alert ("You must enter a name and a valid score")
        return ;
    }   

    Names.push(name);
    Scores.push(score);
}

const displayResults = () => {
    if ($("results"))
        $("results").remove ();
    
    const results = document.createElement ("div");
    const resH = document.createElement ("h2");
    const displayAvg = document.createElement ("span");
    const displayHighScore = document.createElement ("span");
    const br = document.createElement ("br");
    let avgScore = 0;
    let highScore = 0;
    let highScoreIndex = 0;
    
    // Results Container
    results.id = "results";
    $("button-group").insertAdjacentElement ("afterend", results);

    // Result header
    resH.id = "results-heading"; 
    resH.textContent = "Results";
    results.appendChild(resH);
    
    // Avarage Score
    for (const num of Scores)
        avgScore += num;

    avgScore /= Scores.length;
    displayAvg.textContent = `Average score = ${avgScore}`;
    results.appendChild (displayAvg);

    results.appendChild (br);

    // High Score
    highScore = Math.max (...Scores);
    highScoreIndex = Scores.indexOf (highScore);
    displayHighScore.textContent = `High score = ${Names[highScoreIndex]} with a score of ${highScore}`;
    results.appendChild (displayHighScore);

}

const displayScores = () => {
    if ($("scores"))
        $("scores").remove ();

    const scores = document.createElement ("div"); 
    const scorH = document.createElement ("h2");
    const scoresTable = document.createElement ("table");
    const tableHead = document.createElement ("thead");
    const thName = document.createElement ("th");
    const thScore = document.createElement ("th");
    const tableBody = document.createElement ("tbody")

    //? Scores Container
    scores.id = "scores";
    $("separator").insertAdjacentElement ("afterend", scores);

    //? Result header
    scorH.id = "scores-heading";
    scorH.textContent = "Scores";
    scores.appendChild(scorH);
    
    //? Score table
    scoresTable.id = "scores-table";
    scores.appendChild (scoresTable);
    
    // thead
    thName.textContent = "Name";
    thScore.textContent = "Score";
    tableHead.appendChild (thName);
    tableHead.appendChild (thScore);
    scoresTable.appendChild (tableHead);
    
    // tbody
    for (let i = 0; i < Names.length; i++)
    {
        const tr = document.createElement ("tr");
        
        const nameTd = document.createElement ("td");
        const scoreTd = document.createElement ("td");
        
        nameTd.textContent = Names[i];
        scoreTd.textContent = Scores[i];

        tr.appendChild (nameTd);
        tr.appendChild (scoreTd);
    
        tableBody.appendChild (tr);
    }
    scoresTable.appendChild (tableBody);
}

window.addEventListener("DOMContentLoaded", () => {
    $("add-btn").addEventListener("click", addScore);
    $("display-results-btn").addEventListener("click", displayResults);
    $("display-scores-btn").addEventListener("click", displayScores);
});



//*====================================================================================

//? onload event handler
//* An onload event handler is a line of JavaScript code
//* that waits for the entire web page (including HTML, CSS, images, and external scripts)
//* to fully load in the browser before executing a specific function.

//? $ function
//* $ is  a function name,
//* used as a shortcut to select HTML elements by their id.

//? DOMContentLoaded
//* is preferred over onload because it fires as soon as the HTML structure is built,
//* without waiting for heavy images or stylesheets to finish loading.