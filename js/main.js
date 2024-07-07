
// set dice
let d1 = document.querySelector(".img1");
let d2 = document.querySelector(".img2");
let d3 = document.querySelector(".img3");
let d4 = document.querySelector(".img4");
let d5 = document.querySelector(".img5");

// set dice list
const diceList = [d1, d2, d3, d4, d5];

// set roll count
let rollCount = 0;

// set roll score
let score = 0;
let rollScore = document.querySelector(".rollScore");

// on window load
window.onload = function() {
        //pass
}

// function to create random number list

// calculate score

function calScore() {

  for (let i = 0; i < diceList.length; i++){
          // pass
  }              

}

// Function to roll the dice 
function rollTheDice() { 
        setTimeout(function() { 
                
                // add to roll count
                rollCount += 1

                // check for roll count
                if (rollCount > 1) {
                     alert("roll count is greater than 1"); 
                }

                else {
                //get random number for dice
                let randomNumber1 = Math.floor(Math.random() * 6) + 1; 
                let randomNumber2 = Math.floor(Math.random() * 6) + 1; 
                let randomNumber3 = Math.floor(Math.random() * 6) + 1; 
                let randomNumber4 = Math.floor(Math.random() * 6) + 1; 
                let randomNumber5 = Math.floor(Math.random() * 6) + 1; 
                
                // dice roll aniation
                d1.setAttribute("style", "animation: hithere 1s ease; opacity: 0.5;");
                d2.setAttribute("style", "animation: hithere 1s ease; opacity: 0.5;");
                d3.setAttribute("style", "animation: hithere 1s ease; opacity: 0.5;");
                d4.setAttribute("style", "animation: hithere 1s ease; opacity: 0.5;");
                d5.setAttribute("style", "animation: hithere 1s ease; opacity: 0.5;");
                
                // set random number and display dice
                d1.setAttribute("src", "images/dice" + randomNumber1 + ".png"); 
                d2.setAttribute("src", "images/dice" + randomNumber2 + ".png"); 
                d3.setAttribute("src", "images/dice" + randomNumber3 + ".png"); 
                d4.setAttribute("src", "images/dice" + randomNumber4 + ".png"); 
                d5.setAttribute("src", "images/dice" + randomNumber5 + ".png"); 

                setTimeout(function() {
                        //clear animation
                        d1.setAttribute("style", "none;");
                        d2.setAttribute("style", "none;");
                        d3.setAttribute("style", "none;");
                        d4.setAttribute("style", "none;");
                        d5.setAttribute("style", "none;");


                }, 1000)

                // set score 
                calScore();

                };
        }, 1000); 
        
} 

