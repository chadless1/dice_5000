
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
};
const d2 = {
        dice: dice2,
        value: 6,
        active: true,
};
const d3 = {
        dice: dice3,
        value: 6,
        active: true,
};
const d4 = {
        dice: dice4,
        value: 6,
        active: true,
};
const d5 = {
        dice: dice5,
        value: 6,
        active: true,
};

// set dice list
const diceList = [d1, d2, d3, d4, d5];

// set roll score
let rollTag = document.querySelector(".rollScore");
let rollScore = 0;

// on window load
window.onload = function() {
        //pass
};

// animate dice and set random number
function setRanNumber() {
        for (let i = 0; i < diceList.length; i++) {
                if (diceList[i].active) {
                        // animate dice
                        diceList[i].dice.setAttribute("style", "animation: hithere 1s ease; opacity: 0.5;");
                        setTimeout(function() {
                                diceList[i].dice.setAttribute("style", "animation: none;");
                        }, 1000);
                        // set random number
                        diceList[i].value = (Math.floor(Math.random() * 6) + 1); 
                        diceList[i].dice.setAttribute("src", "images/dice" + diceList[i].value + ".png");         

                        if (diceList[i].value == 1 || diceList[i].value == 5) {
                                diceList[i].active = false;
                        };
                };
                
        };
};

// calculate score
function calScore() {

        rollScore = 0;
        for (let i = 0; i < diceList.length; i++) {
                if (diceList[i].active == false) {
                        if (diceList[i].value == 1) {
                                rollScore += 100;
                        }
                        if (diceList[i].value == 5) {
                                rollScore += 50;
                        }
                }
        }
        rollTag.innerHTML = " ";
        rollTag.innerHTML = rollScore;
};

// add player score
function addScore() {
        alert("this score will be added");
}
// reset dice
function resetDice() {

        rollScore = 0;
        rollTag.innerHTML = 0;
        for (let i = 0; i < diceList.length; i++) {

                diceList[i].dice.setAttribute("src", "images/dice6.png");
                diceList[i].value = 6;
                diceList[i].active = true;
        };
};

// Function to roll the dice 
function rollTheDice() { 
        setTimeout(function() { 

                // set random number and animate dice
                setRanNumber();

                
                // set score 
                calScore();

        }, 1000); 
        
};