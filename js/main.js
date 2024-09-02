
// set dice
let dice1 = document.querySelector(".img1");
let dice2 = document.querySelector(".img2");
let dice3 = document.querySelector(".img3");
let dice4 = document.querySelector(".img4");
let dice5 = document.querySelector(".img5");

// create dice object
const d1 = {
        dice: dice1,
        value: 6,
        active: true,
        scored: false,
};
const d2 = {
        dice: dice2,
        value: 6,
        active: true,
        scored: false,
};
const d3 = {
        dice: dice3,
        value: 6,
        active: true,
        scored: false,
};
const d4 = {
        dice: dice4,
        value: 6,
        active: true,
        scored: false,
};
const d5 = {
        dice: dice5,
        value: 6,
        active: true,
        scored: false,
};

// set dice list
const diceList = [d1, d2, d3, d4, d5];
const one_dice_count = new Array();
const five_dice_count = new Array();

// set plaer scores
const playerScores = document.querySelectorAll(".playerScore");
const playerNameTag = document.getElementById("selectPlayer");
let playerIndex = playerNameTag.selectedIndex;
let playerScore = 0;

// set roll score
let rollTag = document.querySelector(".rollScore");
let rollScore = 0;

// keep track of number of disbaled dice (1 or 5) for current roll
let roll_disabled_count = 0;

// keep track of number of disbaled dice (1 or 5)
let disabled_count = 0;

// on window load
window.onload = function() {
        //pass
}

// animate dice roll and set random number
function setRanNumber() {
        roll_disabled_count = 0;
        for (let i = 0; i < diceList.length; i++) {
                if (diceList[i].active) {
                        // animate dice
                        diceList[i].dice.setAttribute("style", "animation: hithere 1s ease; opacity: 0.5;");
                        setTimeout(() => {
                                diceList[i].dice.setAttribute("style", "animation: none;");
                        }, 1000)
                        // set random number
                        diceList[i].value = (Math.floor(Math.random() * 6) + 1); 
                        diceList[i].dice.setAttribute("src", "images/dice" + diceList[i].value + ".png");         
                        // if dice is (1 or 5) set status 
                        if (diceList[i].value == 1 || diceList[i].value == 5) {
                                diceList[i].active = false;
                                disabled_count += 1;
                                roll_disabled_count += 1;
                        }
                        if (diceList[i].value == 1) {
                                one_dice_count.push(diceList[i]);
                                
                        }
                        if (diceList[i].value == 5) {
                                five_dice_count.push(diceList[i]);
                        }
                }
        }
}
                        
// check for scored dice and disable from roll
function freezeDice() {
        
        for (let i = 0; i < diceList.length; i++) {
               if (!diceList[i].active) {
                setTimeout(() => {
                        diceList[i].dice.setAttribute("style", "background-color: red; opacity: 0.8;");
                }, 1000)
               }
        }
}

// calculate a tripple score
// 1(x3) == 1000
// 5(x3) == 500
function tripplScore() {
        rollScore = 0;
        for (let i = 0; i < diceList.length; i++) {
                diceList[i].scored = false;
                
        }
        if (one_dice_count.length == 3) {
                rollScore += 1000;
                for (let i = 0; i < one_dice_count.length; i++) {
                        one_dice_count[i].scored = true;
                }
        }
        if (one_dice_count.length > 3) {
                rollScore += 1000;
                rollScore += (one_dice_count.length - 3) * 100;
                for (let i = 0; i < one_dice_count.length; i++) {
                        one_dice_count[i].scored = true;
                }
        }
        if (five_dice_count.length == 3) {
                rollScore += 500;
                for (let i = 0; i < five_dice_count.length; i++) {
                        five_dice_count[i].scored = true;
                }
        }
        if (five_dice_count.length > 3) {
                rollScore += 500;
                rollScore += (five_dice_count.length - 3) * 50;                
                for (let i = 0; i < five_dice_count.length; i++) {
                        five_dice_count[i].scored = true;
                }               
        }
        for (let i = 0; i < diceList.length; i++) {
                if (diceList[i].active == false && diceList[i].scored == false) {
                        if (diceList[i].value == 1) {
                                rollScore += 100;
                                diceList[i].scored = true;
                        }
                        if (diceList[i].value == 5 && diceList[i].scored == false) {
                                rollScore += 50;
                                diceList[i].scored = true;
                        }
                }
        }
}
// calculate score
//
// check for dice values of 1 & 5
//      1 = 100 points
//      5 = 50 points
//
function calScore() {
        if (roll_disabled_count == 0) {
                setTimeout(() => {
                        alert("No Dice!\n\nYou did not score any points.\n\nTurn Over!");
                        resetDice();
                }, 1000);
        }
        if (disabled_count == 5) {
                setTimeout(() => {
                        document.getElementById('freshRollScore').innerHTML = `Current Score: ${rollScore}`
                        $("#freshRollModal").modal('show');
                        //freshRoll()
                }, 1000)
        }
        if (one_dice_count.length >= 3 || five_dice_count.length >= 3) {
                tripplScore();
        }
        for (let i = 0; i < diceList.length; i++) {
                if (diceList[i].active == false && diceList[i].scored == false) {
                        if (diceList[i].value == 1) {
                                rollScore += 100;
                                diceList[i].scored = true;
                        }
                        if (diceList[i].value == 5 && diceList[i].scored == false) {
                                rollScore += 50;
                                diceList[i].scored = true;
                        }
                }
        }
        setTimeout(() => {
                rollTag.innerHTML = " ";
                rollTag.innerHTML = rollScore;
        }, 1000)
}

// add player score
function addScore() {
        const playerScores = document.querySelectorAll(".playerScore");
        const playerNameTag = document.getElementById("selectPlayer");
        let playerIndex = playerNameTag.selectedIndex;
        let playerScore = 0;
        playerScore = Number(playerScores[playerIndex].innerHTML);

        if (Number(playerScore == 0 && rollScore < 500)) {
                document.getElementById("modalClose").click();
                alert("Can't add score!\n\nYou must score 500 or greater for initial score")
        } else {
                playerScores[playerIndex].innerHTML = playerScore += rollScore;
                document.getElementById("modalClose").click();
                resetDice();
                checkForWinner();         
        }
}

// reset dice
function resetDice() {
        rollScore = 0;
        rollTag.innerHTML = 0;
        roll_disabled_count = 0;
        disabled_count = 0;
        one_dice_count.length = 0;
        five_dice_count.length = 0;
        for (let i = 0; i < diceList.length; i++) {
                diceList[i].dice.setAttribute("src", "images/dice6.png");
                diceList[i].dice.setAttribute("style", "background-color: yellow;");
                diceList[i].value = 6;
                diceList[i].active = true;
                diceList[i].scored = false;
        }
}

// fresh roll
function freshRoll() {
        document.getElementById("modalClose2").click();
        one_dice_count.length = 0;
        five_dice_count.length = 0;
        roll_disabled_count = 0;
        disabled_count = 0;
        for (let i = 0; i < diceList.length; i++) {
                diceList[i].dice.setAttribute("src", "images/dice6.png");
                diceList[i].dice.setAttribute("style", "background-color: yellow;");
                diceList[i].value = 6;
                diceList[i].active = true;
                diceList[i].scored = false;
        }
}

// set player list
function setPlayer() {
        let playerNames = document.querySelectorAll(".playerName");
        let playerOption = document.querySelectorAll(".playerOption");
        for (let i = 0; i < playerNames.length; i++) {
                playerOption[i].innerHTML = playerNames[i].innerHTML;
        }
}

// check for winning score of 5000
function checkForWinner() {
        let winningPlayer = playerNameTag.options[playerNameTag.selectedIndex].text;
        for (let i = 0; i < playerScores.length; i++) {
                if (Number(playerScores[i].innerHTML >= 5000)) {
                        alert(`Winner!\n\n${winningPlayer}\n\nRemaining Players get one last roll for a chance to win.`);
                }
        }
}

// Function to roll the dice 
function rollTheDice() { 
        setTimeout(function() { 
                // set random number and animate dice roll
                setRanNumber();
                // freeze scored dice
                freezeDice();
                // set roll score 
                calScore();
                console.log(diceList);
        }, 1000) 
}