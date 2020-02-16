function check(){
	var fråga1 = document.quiz.fråga1.value;
	var fråga2 = document.quiz.fråga2.value;
	var fråga3 = document.quiz.fråga3.value;
	var fråga4 = document.quiz.fråga4.value;
	var fråga5 = document.quiz.fråga5.value;
	var fråga6 = document.quiz.fråga6.value;
	var fråga7 = document.quiz.fråga7.value;
	var fråga8 = document.quiz.fråga8.value;
	var fråga9 = document.quiz.fråga9.value;
	var fråga10 = document.quiz.fråga10.value;

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

	if (fråga6 == "1953") {
		correct++;
	}
	if (fråga7 == "Silver") {
		correct++;
	}
	if (fråga8 == "Finland") {
		correct++;
	}
	if (fråga9 == "Sedin") {
		correct++;
	}
	if (fråga10 == "Schweiz") {
		correct++;
	}


	var messages = ["Bra jobbat!", "Det är godkänt..", "Du måste bli bättre"];

	var range;

		if (correct <= 6) {
			range = 2;
		}

		if ( correct > 6 && correct < 10 ) {
			range = 1;
		}


		if (correct > 8) {
			range = 0;
		}
		


	document.getElementById('nar_klar').style.visibility = "visible";

	document.getElementById('antal_rätt').innerHTML = "Du fick " + correct + " rätt! ";
	document.getElementById('message').innerHTML = messages[range];
	//console.log("Poäng: "+correct);
	event.preventDefault();
	}