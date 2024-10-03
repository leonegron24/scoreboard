let home = 0
let away = 0


function scoreHome(){
    // functions that allow teams to score more than just one point per click.
    function doubleHome(){
        if (home % 2 === 0){
            home *= 2
            console.log(home)
        }
    }
    home += 1
    console.log("Home = "+ home)
    let hScore = document.getElementById("homeScore") 
    hScore.innerText = home
    doubleHome();
        // declare a winner when a team reaches a certain score threshold - window.alert can pop up announcing the winner.
        console.log(hScore.innerText)
    winner();
}


function scoreAway(){
    away += 1
    console.log("Away = " + away)
    function doubleAway(){
        if (away % 2 === 0){
            away *= 2
            console.log(away)
        }
    }
    let aScore = document.getElementById("awayScore")
    aScore.innerText = away
    doubleAway();
    console.log(aScore.innerText)
    // declare a winner when a team reaches a certain score threshold - window.alert can pop up announcing the winner.
    winner();
}

//  adding a button that allows users to subtract points from a team's score, while ensuring the score does not drop below 0.
function loseHome(){
    if (home > 0){
        home -= 1
    } else {
        home = 0
    }
    console.log("Home = "+ home)
    let hScore = document.getElementById("homeScore") 
    hScore.innerText = home
}

function loseAway(){
    if (away > 0){
        away -= 1
    } else {
        away = 0
    }
    console.log("Away = "+ away)
    let aScore = document.getElementById("awayScore") 
    aScore.innerText = away
}

function winner(){
    let aScore = document.getElementById("awayScore")
    let hScore = document.getElementById("homeScore")
    
    let numA = parseInt(aScore.innerText)
    let numH = parseInt(hScore.innerText)

    if (numA >49){
        window.alert("Away Wins!")
        resetScore();
    } else if (numH > 49){
        window.alert("Home Wins!")
        resetScore();
    }
}

// add a reset button that sets both teams' scores back to 0, allowing for a fresh start. This reset function could also be triggered automatically when a team wins
function resetScore(){
    let aScore = document.getElementById("awayScore")
    let hScore = document.getElementById("homeScore")
    home = 0
    away = 0
    aScore.innerText = 0
    hScore.innerText = 0
}





// Try to utilize parameters and arguments within your functions to make them re-usable.

// consider moving all DOM interactions into a single draw function.