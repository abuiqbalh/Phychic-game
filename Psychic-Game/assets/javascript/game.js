// Possible computer choices
var computerChoices = ['a','s','d','f'];
    
// Grab all HTML Elements
/* var userHTML = document.getElementById('user-guess');
var computerHTML = document.getElementById('computer-guess');
var winsHTML = document.getElementById('wins');
var l ossesHTML = document.getElementById('losses');*/


// Wins/Losses/Ties
var wins = 0;
var losses = 0;



document.onkeyup = function(event) {
  // capture user input
  var userChoice = event.key;
  console.log(userChoice);
  // randomly pick a letter from the computerChoices array using Math.random()
  var computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];

  // run if/else statement checking to see if user input matches a/s/d/f
  if (userChoice === 'a' || userChoice === 's' || userChoice === 'd'|| userChoice==='f'|| userChoice==='b'){
    // Run Game
    if (userChoice === computerChoice) {
      wins++;
   
    } 
    
    else if (userChoice==='b'){
        wins=0;
        losses=0;
        computerChoice='NA';
        userChoice='Game reset';
    }

    else  {
      losses++;
    } 
  
	document.getElementById('user-guess').innerHTML=userChoice;
	document.getElementById('computer-guess').innerHTML=computerChoice;
	document.getElementById('wins').innerHTML=wins;
	document.getElementById('losses').innerHTML=losses;
    /* userHTML.textContent = userChoice;
    computerHTML.textContent= computerChoice;
    winsHTML.textContent= wins;
    lossesHTML.textContent = losses; */
	
    

  } else {
    alert("You need to press 'a','s','d','f'");
  }




}
