var compChoice = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var win = 0;
var loss = 0;
var attempt = 5;

var compGuess = compChoice[Math.floor(Math.random() * compChoice.length)];
console.log (compGuess)

document.onkeyup = function (event) {

	if (attempt > 0){	
		var userGuess = event.key;

		if (userGuess === compGuess){
			win += 1;		
			var html = 
				"<p> You Win!  Computer picked '" + compGuess + "'</p><p>Wins: " + win + "</p><p>Losses: " + loss + "</p>" 
        	document.querySelector("#game").innerHTML = html;
        	compGuess = compChoice[Math.floor(Math.random() * compChoice.length)];
        	console.log (compGuess)
		}
		else {
			attempt -= 1;
			var html = 
				"<p>Attemps left this round: " + attempt + "</p><p>Wins: " + win + "</p><p>Losses: " + loss + "</p>" 
        	document.querySelector("#game").innerHTML = html;
		}

	}

	else {
		loss +=1
		attempt = 6
		var html =
			"<p>Out of tries! Computer picked '" + compGuess + "'</p><p>Wins: " + win + "</p><p>Losses: " + loss + "</p><p>Press any key to play again!</p>" 
       	document.querySelector("#game").innerHTML = html;
       	compGuess = compChoice[Math.floor(Math.random() * compChoice.length)];
       	console.log (compGuess)

		
	}
}

        // var html =
        //   "<p>You chose: " + userGuess + "</p>" +
        //   "<p>The computer chose: " + computerGuess + "</p>" +
        //   "<p>wins: " + wins + "</p>" +
        //   "<p>losses: " + losses + "</p>" +
        //   "<p>ties: " + ties + "</p>";