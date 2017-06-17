function add(number1, number2){



	return parseInt(number1) + parseInt(number2);

}

function subtract(number1, number2){



	return parseInt(number1) - parseInt(number2);

}

function multiply(number1, number2){



	return parseInt(number1) * parseInt(number2);

}

function divide(number1, number2){



	return parseInt(number1) / parseInt(number2);

}


 

var number1 = prompt("Please enter first opperand");
var number2 = prompt("Please enter second opperand");
var operation = prompt("Please enter one of the following" 
	+ "operations: add, subtract, multiply or divide");


var result = 0;

if (operation ==="") {
	operation = "add";
}

switch(operation){

	case "add":
		result = add(number1,number2);
		break;

	case "subtract":
		result = subtract(number1,number2);
		break;

	case "multiply":
		result = multiply(number1,number2);
		break;

	case "divide":
		result = divide(number1,number2);
		break;

	default:
		result = "not a valid operation"
		break;

}

alert(result);



