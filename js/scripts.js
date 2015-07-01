var questions = [];
var answers = [];
var score = 0;

function AllQuestions(question, choices, correctAnswer) {
	this.question = question;
	this.choices = choices;
	this.correctAnswer = correctAnswer;
}

questions[0] = new AllQuestions(["What is the main idea of the passage?"], ["I don't know", "I don't care", "Neither know nor care", "none of the above"], 2);
questions[1] = new AllQuestions(["What is the theme of the passage?"], ["I still don't know", "I still don't care", "Still neither know nor care", "still none of the above"], 2);