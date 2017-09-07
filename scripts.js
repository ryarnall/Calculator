var math_sentence = "";
var current_num = "";
var result = "";

//click function for number buttons
function numButtonHandler(eventData) {
	var value = $(eventData.target).attr("value");
	if (value == ".") {
		decimal_check(value); 
	} else if (value == "0") {
		zeroCheck(value);
	} else {
		display_value(value);
	}
}

//does not display zero if it would be the first digit of the current number
function zeroCheck(value) {
	if (current_num != "") {
		display_value(value);
	}
}


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
//	adds number to math sentence/equation
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

//if = has not already been hit, it evals the equation and displays the result
//	otherwise, hitting the = button does nothing
function hitEquals(operator) {
	if (math_sentence.slice(-1) != "=") {
			result = eval(math_sentence);
			$("#screen").text(result);
			console.log(result);
			math_sentence += operator;
			$("#history_screen").text(math_sentence);
			current_num = result.toString();

			// console.log("result is", result);
			// console.log("result type is", typeof(result));
			// console.log("current_num is", current_num);
			// console.log("current_num is", typeof(current_num));
	}
}

//adds the operator to the math problem (the "sentence")
function hitOperator(operator) {
	if (result != "") {
			math_sentence = current_num.toString();
	}

	//if the last character in the math equation/sentence is already an operator, 
	//	this statement removes that operator before displaying the clicked one
	if (math_sentence.slice(-1) == "+" || math_sentence.slice(-1) == "-"
		|| math_sentence.slice(-1) == "*" || math_sentence.slice(-1) == "/") {
		math_sentence = math_sentence.slice(0,-1);
		console.log(math_sentence);
	}

	math_sentence += operator;
	$("#history_screen").text(math_sentence);
	current_num = "";
	result = "";
}

// runs the appropriate function when =, +, -, *, or / is clicked
$(".op_button").click(function(eventData) {
	var operator = $(eventData.target).attr("value");
	if (operator == "=") {
		hitEquals(operator);
	} else {
		hitOperator(operator);
	}	
})

// click handler for the clear button
// 		empties the math_sentence, result, and current_num strings
// 		clears the history_screen and the regular screen
$("#clear_button").click(function() {
	math_sentence = "";
	current_num = "";
	result = "";
	$("#screen").text("");
	$("#history_screen").text("");
})


//function for when a key is pressed
//	calls the appropriate function based on what was pressed
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
  	zeroCheck(value);
  } else if (the_key.which == 110 || the_key.which == 190) {
  	value = ".";
  	decimal_check(value);
  } else if (the_key.which == 107) {
  	value = "+";
  	hitOperator(value);
  } else if (the_key.which == 109) {
  	value = "-";
  	hitOperator(value);
  } else if (the_key.which == 106) {
  	value = "*";
  	hitOperator(value);
  } else if (the_key.which == 111) {
  	value = "/";
  	hitOperator(value);
  } else if (the_key.which == 12 || the_key.which == 13) {
  	value = "="
  	hitEquals(value);
  }
  
});

// initiates the click handler for number buttons
$(".num_button").click(numButtonHandler);