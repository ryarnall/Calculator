var math_sentence = "";
var current_num = "";

//click function for number buttons
$(".num_button").click(function(eventData) {
	var value = $(eventData.target).attr("value");

	if (value == ".") {
		decimal_check(value); 
	} else {
		display_value(value);
	}
})

//checks if last character of current number is "."
//	if yes, it does nothing
//	if no, it jumps to function display_value
function decimal_check(value) {
	if (current_num.indexOf(".") == -1) {
		display_value(value);
	} 
}

//assigns the value of the clicked number button to the paragraph text on the "screen"
function display_value(value) {
	current_num += value;
		$("#screen").text(current_num);

		math_sentence += value;
		$("#history_screen").text(math_sentence);
		console.log(math_sentence);
}






//adds the operator to the math problem (the "sentence")
//once "=" button is clicked, it evals the sentence, returns the answer, and clears the sentence
$(".op_button").click(function(eventData) {
	var operator = $(eventData.target).attr("value");

	if ($(eventData.target).attr("value") == "=") {
		var result = eval(math_sentence);
		$("#screen").text(result);
		console.log(result);

		math_sentence += operator;
		$("#history_screen").text(math_sentence);

		current_num = result;

	} else {
		if (result != "") {
			math_sentence = current_num;
		}
		math_sentence += operator;
		$("#history_screen").text(math_sentence);
		current_num = "";

		console.log(math_sentence);
	}	
})

// empties the math_sentence and current_num strings
// clears the history_screen and the regular screen
$("#clear_button").click(function() {
	math_sentence = "";
	current_num = "";
	result = "";
	$("#screen").text("");
	$("#history_screen").text("");
})