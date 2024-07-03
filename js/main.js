
// on window load
window.onload = function() {
        //pass
}

// Function to roll the dice 
function rollTheDice() { 
        setTimeout(function() { 
                
                //get random number for dice
                let randomNumber1 = Math.floor(Math.random() * 6) + 1; 
                let randomNumber2 = Math.floor(Math.random() * 6) + 1; 
                let randomNumber3 = Math.floor(Math.random() * 6) + 1; 
                let randomNumber4 = Math.floor(Math.random() * 6) + 1; 
                let randomNumber5 = Math.floor(Math.random() * 6) + 1; 
                
                let d1Value = randomNumber1;
                let d2Value = randomNumber2;
                let d3Value = randomNumber3;
                let d4Value = randomNumber4;
                let d5Value = randomNumber5;
                
                //dice roll aniation
                document.querySelector(".img1").setAttribute("style", "animation: hithere 1s ease; opacity: 0.5;");
                document.querySelector(".img2").setAttribute("style", "animation: hithere 1s ease; opacity: 0.5;");
                document.querySelector(".img3").setAttribute("style", "animation: hithere 1s ease; opacity: 0.5;");
                document.querySelector(".img4").setAttribute("style", "animation: hithere 1s ease; opacity: 0.5;");
                document.querySelector(".img5").setAttribute("style", "animation: hithere 1s ease; opacity: 0.5;");

                // set random number and display dice
                document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png"); 
                document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png"); 
                document.querySelector(".img3").setAttribute("src", "images/dice" + randomNumber3 + ".png"); 
                document.querySelector(".img4").setAttribute("src", "images/dice" + randomNumber4 + ".png"); 
                document.querySelector(".img5").setAttribute("src", "images/dice" + randomNumber5 + ".png"); 

                setTimeout(function() {
                        //clear animation
                        document.querySelector(".img1").setAttribute("style", "none;");
                        document.querySelector(".img2").setAttribute("style", "none;");
                        document.querySelector(".img3").setAttribute("style", "none;");
                        document.querySelector(".img4").setAttribute("style", "none;");
                        document.querySelector(".img5").setAttribute("style", "none;");


                }, 1000)

                // set score 
                let diceSum = (d1Value + d2Value + d3Value + d4Value + d5Value);
                let rollScore = document.querySelector(".rollScore");
                rollScore.innerHTML = diceSum; 

        }, 1000); 

} 

