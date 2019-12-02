let points;
const time = 1000;
let maxPoints;
let startDate;
let food, clean, happiness;
let delay;

document.getElementById("easy").onclick = function() {
	points = 3;
	maxPoints = 100;
	food = document.getElementById("Food").value = Math.random() * (maxPoints - 50) + 50;
	clean = document.getElementById("Clean").value = Math.random() * (maxPoints - 50) + 50;
	happiness = document.getElementById("Happiness").value = Math.random() * (maxPoints - 50) + 50;
	delay = setInterval(startTamagotchi, time);
	startDate = startTimer();
}

document.getElementById("hard").onclick = function() {
	points = 5;
	maxPoints = 70;
	food = document.getElementById("Food").value = Math.random() * (maxPoints - 50) + 50;
	clean = document.getElementById("Clean").value = Math.random() * (maxPoints - 50) + 50;
	happiness = document.getElementById("Happiness").value = Math.random() * (maxPoints - 50) + 50;
	delay = setInterval(startTamagotchi, time);
	startDate = startTimer();
}


function changeCat (maxPoints, points) {
	food = document.getElementById("Food").value;
	clean = document.getElementById("Clean").value;
	happiness = document.getElementById("Happiness").value;

	let total = food + clean + happiness;

	if (food > 0 && clean > 0 && happiness > 0) {

		if (total < 240 && total > 140) {
			document.getElementById("cat").src = "img/cats-second-stage.png";
		} else if (total < 140 && total > 60) {
			document.getElementById("cat").src = "img/cats-third-stage.png";
		} else if (total < 60 && food > 0 && clean > 0 && happiness > 0) {
			document.getElementById("cat").src = "img/cats-fourth-stage.png";
		}

		food = food - points;
		clean = clean - points;
		happiness = happiness - points;
		

		console.log(points);
		console.log(maxPoints);
		document.getElementById("eat").onclick = function () {
			if (food <= maxPoints && clean <= maxPoints) {
				food = document.getElementById("Food").value;
				food = food + 30;
				document.getElementById("Food").value = food;

				clean = document.getElementById("Clean").value;
				clean = clean - 20;
				document.getElementById("Clean").value = clean;
			} else {
				alert("I cannot eat anymore");
			}
		}

		document.getElementById("wash").onclick = function () {

			if (clean <= maxPoints && happiness <= maxPoints) {
				clean = document.getElementById("Clean").value;
				clean = clean + 40;
				document.getElementById("Clean").value = clean;

				happiness = document.getElementById("Happiness").value;
				happiness = happiness - 20;
				document.getElementById("Happiness").value = happiness;
			} else {
				alert("I cannot wash anymore");
			}
		}

		document.getElementById("run").onclick = function () {

			if (happiness <= maxPoints && food <= maxPoints) {
				happiness = document.getElementById("Happiness").value;
				happiness = happiness + 15;
				document.getElementById("Happiness").value = happiness;

				food = document.getElementById("Food").value;
				food = food - 20;
				document.getElementById("Food").value = food;
			} else {
				alert("I cannot run anymore");
			}
		}


		document.getElementById("Food").value = food;
		document.getElementById("Clean").value = clean;
		document.getElementById("Happiness").value = happiness;

	} else {
		document.getElementById("cat").src = "img/cats-final-stage.png";
		clearInterval(delay);
		let finishDate = new Date ();
		timer(finishDate);
	}	
}

function timer(finishDate) {
	let playedTime = finishDate.getTime() - startDate.getTime();
	document.getElementById("timer").innerHTML = "How long Tamagotchi lived: " + playedTime * 0.001 + " seconds";
	document.getElementById("timer").style.display = "block";
}

function startTimer() {
	let startDate = new Date();
	return startDate;
}

function startTamagotchi() {
	changeCat(maxPoints, points);
}

document.getElementById("restart").onclick = function () {
	location.reload();
}




