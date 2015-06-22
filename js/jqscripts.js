$(document).ready(function(){

	var name, val, id, divId = "";
	
	//load all questions
	for (var j = 0, l = questions.length; j < l; j++) {
		//setup question div
		divId = "question" + j.toString();
		$('#question').append("<div id="+divId+"><h3>" + questions[j].question + "</h3>");
		for (var i = 0, length = questions[j].choices.length; i < length; i++) {
			//populate each question choice
			name = "q" + j.toString();
			val = i.toString();
			id = "q" + j.toString() + "c" + i.toString();
			$('#' + divId).append("<input type='radio' name="+name+" val="+val+", id="+id+"> " + questions[j].choices[i] + "</br>");
		}
		//close off question div
		$('#question').append("</div>");
	}

	//next question handler
	$('#nextButton').on('click', nextQuestion)

	//switch to next question
	function nextQuestion(){
		alert("hello, world");
	}

});
