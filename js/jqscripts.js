$(document).ready(function(){


	var speed = 500; 			// fade speed
	var name, val, id, divId, results = "";

	//load questions
	loadQuestions();

	//add initial active class
	$('.question').first().addClass('active');

	//hide all questions
	$('.question').hide();

	//hide submit button
	$('#submitButton').hide();

	//show first question
	$('.active').show();

	//check answer
	$('#nextButton').on('click', checkAnswer);

	//next question handler
	$('#nextButton').on('click', nextQuestion);

	//calculate final score and display result to user when submit is clicked
	$('#submitButton').on('click', calculateScore);

	//switch to next question
	function nextQuestion(){
		//if last question, remove next button and show submit button
		if ( $('.active').attr('id') == (questions.length - 1) ) {
			$('#nextButton').hide();
			$('submitButton').show();
		}
		$('.active').removeClass('active').addClass('oldActive');
		$('.oldActive').next().addClass('active');
		$('.oldActive').removeClass('oldActive');
		$('.question').fadeOut(speed);
		$('.active').fadeIn(speed);
	}

	//load all questions and buttons
	function loadQuestions() {
		//load all questions
		for (var j = 0, l = questions.length; j < l; j++) {
			
			//setup question div
			divId = j.toString();
			$('#questions').append("<div class='question' id="+divId+"><h3>" + questions[j].question + "</h3>");

			for (var i = 0, length = questions[j].choices.length; i < length; i++) {
				
				//populate each question choice
				name = "q" + j.toString();
				val = i.toString();
				id = "q" + j.toString() + "c" + i.toString();

				$('#' + divId).append("<input type='radio' name="+name+" value="+val+", id="+id+"> " + questions[j].choices[i] + "</br>");
			}

			//close off question div
			$('#questions').append("</div>");
		}
		$('#questions').append("<input id='submitButton' type='button' value='Submit'>");
	}

	//check answers
	function checkAnswer() {

		//get id of question as String and as Num
		qIdString = $('.active').attr('id');
		qIdNum = parseInt($('.active').attr('id'));

		//populate answer array with answers from each question
		answers[qIdNum] = parseInt(document.forms["quizForm"]["q" + qIdString].value);

		//add notification to top of screen alerting user about correctness of answer
		if (answers[qIdNum] == questions[qIdNum].correctAnswer) {
			return alertScore(qIdNum, true);

		} else {
			return alertScore(qIdNum, false);
		}

	}
	function alertScore (questionIdNumber, correctness) {
		var returnArray = [];
		results = $('#results');
		if (correctness) {
			//build and append html results div
			results.html('<h3> You got question #'+questionIdNumber+' correct!</h3>');
		} else {
			//build and append html results div
			results.html('<h3> You got question #'+questionIdNumber+' incorrect!</h3>');
		}
		return results;
	}

	function calculateScore () {
		var score = 0;
		for (var i = 0, l = answers.length; i< l; i++) {
			if (answers[i] == questions[i].correctAnswer) {
				score++;
			} 
		}
		displayFinalScore(score);
		return score;
	}

	function displayFinalScore (finalScore) {
		//hide results from individual questions
		$('#results').hide();

		//initialize final score div variable
		var finalScoreDiv = $('#finalResults');

		//append final score to the finalScore div in index.html
		return finalScoreDiv.html('<h3> You got '+finalScore+' correct out of '+questions.length+' total questions!</h3>');
	}

});
