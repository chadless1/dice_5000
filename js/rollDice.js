		
// Function to roll the dice 
function rollTheDice() { 
        setTimeout(function () { 
                
                //get random number for dice
                var randomNumber1 = Math.floor(Math.random() * 6) + 1; 
                var randomNumber2 = Math.floor(Math.random() * 6) + 1; 
                var randomNumber3 = Math.floor(Math.random() * 6) + 1; 
                var randomNumber4 = Math.floor(Math.random() * 6) + 1; 
                var randomNumber5 = Math.floor(Math.random() * 6) + 1; 
                var randomNumber6 = Math.floor(Math.random() * 6) + 1; 
                
                //dice roll aniation
                document.querySelector(".img1").setAttribute("style", "animation: hithere 1s ease; opacity: 0.5;");
                document.querySelector(".img2").setAttribute("style", "animation: hithere 1s ease; opacity: 0.5;");
                document.querySelector(".img3").setAttribute("style", "animation: hithere 1s ease; opacity: 0.5;");
                document.querySelector(".img4").setAttribute("style", "animation: hithere 1s ease; opacity: 0.5;");
                document.querySelector(".img5").setAttribute("style", "animation: hithere 1s ease; opacity: 0.5;");
                document.querySelector(".img6").setAttribute("style", "animation: hithere 1s ease; opacity: 0.5;");

                // set random number and display dice
                document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png"); 
                document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png"); 
                document.querySelector(".img3").setAttribute("src", "images/dice" + randomNumber3 + ".png"); 
                document.querySelector(".img4").setAttribute("src", "images/dice" + randomNumber4 + ".png"); 
                document.querySelector(".img5").setAttribute("src", "images/dice" + randomNumber5 + ".png"); 
                document.querySelector(".img6").setAttribute("src", "images/dice" + randomNumber6 + ".png"); 
                
                setTimeout(function () {
                        //clear animation
                        document.querySelector(".img1").setAttribute("style", "none;");
                        document.querySelector(".img2").setAttribute("style", "none;");
                        document.querySelector(".img3").setAttribute("style", "none;");
                        document.querySelector(".img4").setAttribute("style", "none;");
                        document.querySelector(".img5").setAttribute("style", "none;");
                        document.querySelector(".img6").setAttribute("style", "none;");


                }, 1000)

        }, 1000); 

} 

