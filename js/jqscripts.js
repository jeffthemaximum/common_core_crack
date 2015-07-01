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

	//switch to next question
	function nextQuestion(){
		$('.active').removeClass('active').addClass('oldActive');
		$('.oldActive').next().addClass('active');
		$('.oldActive').removeClass('oldActive');
		$('.question').fadeOut(speed);
		$('.active').fadeIn(speed);
		$('.active').removeClass('active').addClass('oldActive');
		$('.oldActive').next().addClass('active');
		$('.oldActive').removeClass('oldActive');
		$('.question').fadeOut(speed);
		$('.active').fadeIn(speed);

		//if last question, remove next button and leave submit button
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
			$('#questions').append("</br></div>");
		}
		$('#questions').append("<input id='submitButton' type='submit' value='Submit'>");
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
			alertScore(qIdNum, true, score);
		} else {
			alertScore(qIdNum, false, score);
		}

	}
	function alertScore (questionIdNumber, correctness, currentScore) {
		var returnArray = [];
		results = $('#results');
		if (correctness) {
			//update score
			currentScore++;
			//build and append html results div
			results.html('<h3> You got question #'+questionIdNumber+' correct!</h3>');
		} else {
			//update score
			currentScore++;
			//build and append html results div
			results.html('<h3> You got question #'+questionIdNumber+' correct!</h3>');
		}
		returnArray[0] = currentScore;
		returnArray[1] = results;
		return returnArray;
	}

});
