function check(){
	var fråga1 = document.quiz.fråga1.value;
	var fråga2 = document.quiz.fråga2.value;
	var fråga3 = document.quiz.fråga3.value;
	var fråga4 = document.quiz.fråga4.value;
	var fråga5 = document.quiz.fråga5.value;
	var correct = 0;

	if (fråga1 == "354") {
		correct++;
	}
	if (fråga2 == "11") {
		correct++;
	}
	if (fråga3 == "2018") {
		correct++;
	}
	if (fråga4 == "Hendrik Lundqvist") {
		correct++;
	}
	if (fråga5 == "Rikard Grönborg") {
		correct++;
	}

	var messages = ["Bra jobbat!", "Det är godkänt..", "Du måste bli bättre"];

	var range;

		if (correct < 2) {
			range = 2;
		}

		if ( correct < 5 ) {
			range = 1;
		}


		if (correct < 1) {
			range = 0;
		}
		


	document.getElementById('nar_klar').style.visibility = "visible";

	document.getElementById('antal_rätt').innerHTML = "Du fick " + correct + " rätt! ";
	//document.getElementById('antal_rätt').innerHTML = messages[range];
	//console.log("Poäng: "+correct);
	event.preventDefault();
	}