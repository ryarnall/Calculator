var math_sentence = "";
var current_num = "";
var result = "";

//click function for number buttons
function numButtonHandler(eventData) {
	var value = $(eventData.target).attr("value");

	if (value == ".") {
		decimal_check(value); 
	} else {
		display_value(value);
	}
}

$(".num_button").click(numButtonHandler);


//checks if last character of current number is "."
//	if yes, it does nothing
//	if no, it jumps to function display_value
function decimal_check(value) {
	console.log(current_num);
	if (current_num.indexOf(".") == -1) {
		display_value(value);
	} 
}

//assigns the value of the clicked number button to the paragraph text on the "screen"
function display_value(value) {
	if (result != "") {
		result = "";
		current_num = "";
		math_sentence = "";
	}
	current_num += value;
	$("#screen").text(current_num);

	math_sentence += value;
	$("#history_screen").text(math_sentence);
	console.log(math_sentence);
}


//adds the operator to the math problem (the "sentence")
//once "=" button is clicked, it evals the sentence and returns the answer
$(".op_button").click(function(eventData) {
	var operator = $(eventData.target).attr("value");

	if ($(eventData.target).attr("value") == "=") {

		//if = has not already been hit, it evals the equation and displays the result
		//otherwise, hitting the = button does nothing
		if (math_sentence.slice(-1) != "=") {
			result = eval(math_sentence);
			$("#screen").text(result);
			console.log(result);

			math_sentence += operator;
			$("#history_screen").text(math_sentence);

			current_num = result;
		}

	} else {
		if (result != "") {
			math_sentence = current_num;
		}
		// if (math_sentence.slice(-1) == "+" || math_sentence.slice(-1) == "-" ||
		// 	math_sentence.slice(-1) == "*" || math_sentence.slice(-1) == "/") {
		// 	//code here =P
		// }

		math_sentence += operator;
		$("#history_screen").text(math_sentence);
		current_num = "";
		result = "";
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


//trying keypress functions
$(document).keydown(function(the_key) {
	var value = "";
  console.log('this is the keycode', the_key.keyCode);

  if (the_key.which == 49 || the_key.which == 97) {
  	value = 1
  	display_value(value);
  } else if (the_key.which == 50 || the_key.which == 98) {
  	value = 2
  	display_value(value);
  } else if (the_key.which == 51 || the_key.which == 99) {
  	value = 3
  	display_value(value);
  } else if (the_key.which == 52 || the_key.which == 100) {
  	value = 4
  	display_value(value);
  } else if (the_key.which == 53 || the_key.which == 101) {
  	value = 5
  	display_value(value);
  } else if (the_key.which == 54 || the_key.which == 102) {
  	value = 6
  	display_value(value);
  } else if (the_key.which == 55 || the_key.which == 103) {
  	value = 7
  	display_value(value);
  } else if (the_key.which == 56 || the_key.which == 104) {
  	value = 8
  	display_value(value);
  } else if (the_key.which == 57 || the_key.which == 105) {
  	value = 9
  	display_value(value);
  } else if (the_key.which == 45 || the_key.which == 96) {
  	value = 0
  	display_value(value);
  } else if (the_key.which == 110 || the_key.which == 190) {
  	value = ".";
  	decimal_check(value);
  }

  
});