var compChoice = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var win = 0;
var game = 0;
var attempt = 6;

var compGuess = compChoice[Math.floor(Math.random() * compChoice.length)];
console.log (compGuess)

document.onkeyup = function (event) {

	if (game === 10){
		var html = 
			"Thank you for participating in Psyonicx Incorporated's Latent Psychic Search!"
       	document.querySelector("#game").innerHTML = html;

	}

	else if (attempt > 0){	
		var userGuess = event.key;

		if (userGuess === "Escape"){
			var html = "Please remain calm.  Medical teams are on the way.  Any information you can provide on your physical and/or mental symptoms will assist in treatment." 
        	document.querySelector("#game").innerHTML = html;
		}


		else if (userGuess === compGuess){
			win += 1;
			game +=1		
			var html = 
				"<p>Correct! Please try to remember any relevant details about your current mindstate and report them once the test is complete.</p><p>Wins: " + win + "</p><p>Total rounds: " + game + "</p>" 
        	document.querySelector("#game").innerHTML = html;
        	compGuess = compChoice[Math.floor(Math.random() * compChoice.length)];
        	console.log (compGuess)
		}
		else {
			attempt -= 1;
			var html = 
				"<p>Attemps left this round: " + attempt + "</p><p>Wins: " + win + "</p><p>Total rounds: " + game + "</p>" 
        	document.querySelector("#game").innerHTML = html;
		}

	}

	else {
		game +=1
		attempt = 6
		var html =
			"<p>Remember, a wrong answer is not a bad answer!  All data we collect is useful!</p><p>Wins: " + win + "</p><p>Total rounds: " + game + "</p><p>Press any key to begin the next round!</p>" 
       	document.querySelector("#game").innerHTML = html;
       	compGuess = compChoice[Math.floor(Math.random() * compChoice.length)];
       	console.log (compGuess)

		
	}
}