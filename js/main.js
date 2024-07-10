
// set dice
let d1 = document.querySelector(".img1");
let d2 = document.querySelector(".img2");
let d3 = document.querySelector(".img3");
let d4 = document.querySelector(".img4");
let d5 = document.querySelector(".img5");

// set dice list
const diceList = [d1, d2, d3, d4, d5];

// set frozen list
const frozenList = [];

// set random number list
const ranNumList = [];

// set roll count
let rollCount = 0;

// set roll score
let score = 0;
let rollScore = document.querySelector(".rollScore");

// on window load
window.onload = function() {
        //pass
}

// roll dice animation
function animateDice() {
        
        for (let i = 0; i < diceList.length; i++){
                diceList[i].setAttribute("style", "animation: hithere 1s ease; opacity: 0.5;");
                setTimeout(function() {
                        diceList[i].setAttribute("style", "animation: none;");
                }, 1000);
        }
}

// set random number
function setRanNumber() {
        ranNumList.length = 0;
        for (let i = 0; i < diceList.length; i++) {
                
                ranNumList.push(Math.floor(Math.random() * 6) + 1); 
                diceList[i].setAttribute("src", "images/dice" + ranNumList[i] + ".png"); 
        }
        
}

// calculate score
function calScore() {

  for (let i = 0; i < frozenList.length; i++){
          // pass
  }              

}

// add player score
function addScore() {

        //pass
         
}

// reset dice
function resetDice() {

        score = 0;
        rollCount = 0;
        for (let i = 0; i < diceList.length; i++) {

                diceList[i].setAttribute("src", "images/dice6.png");
        }
}

// Function to roll the dice 
function rollTheDice() { 
        setTimeout(function() { 
                
                // add to roll count
                rollCount += 1;

                // dice roll aniation
                animateDice();

                // set random number and display dice
                setRanNumber();
                
                // set score 
                calScore();

        }, 1000); 
        
} 

