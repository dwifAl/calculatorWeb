// Declaration Variabel
let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';

const calculatorScreen = document.querySelector(".calculator-screen");

// Function in Program
const updateScreen = (number) => {
	calculatorScreen.value = number;
}

const inputNumber = (number) => {
	if (currentNumber === '0') {
		currentNumber = number;
	}
	else {
		currentNumber += number;
	}
}

const inputOperator = (operator) => {
	if (calculationOperator === '') {
		prevNumber = currentNumber;
	}

	calculationOperator = operator;
	currentNumber = '';
}

const calculate = () => {
	let result = '';

	switch (calculationOperator) {
		case "+" :
			result = parseFloat(prevNumber) + parseFloat(currentNumber);
			break;
		case "-" :
			result = parseFloat(prevNumber) - parseFloat(currentNumber);
			break;
		case "*" :
			result = parseFloat(prevNumber) * parseFloat(currentNumber);
			break;
		case "/" :
			result = parseFloat(prevNumber) / parseFloat(currentNumber);
			break;
		case "%" :
			result = parseFloat(prevNumber/100) * parseFloat(currentNumber);
		default :
			break;
	}
	currentNumber = result;
	calculationOperator = '';
}

const clearAll = () => {
	prevNumber = '';
	calculationOperator = '';
	currentNumber = '0';
}

const inputDecimal = (dot) => {
	if (currentNumber.includes(".")) {
		return;
	}
	currentNumber += dot;
}

// Event Listener (click) Code
const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
	number.addEventListener("click", (event) => {
		// console.log("Number button is pressed");
		inputNumber(event.target.value);
		updateScreen(currentNumber);
	});
});

const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
	operator.addEventListener("click", (event) => {
		// console.log("Operator button is pressed");
		inputOperator(event.target.value);
	})
});

const equalSign = document.querySelector(".equal-sign");

equalSign.addEventListener("click", () => {
	// console.log("Eqial Sign button is pressed");
	calculate();
	updateScreen(currentNumber);
});

const clearBtn = document.querySelector(".all-clear");

clearBtn.addEventListener("click", () => {
	// console.log("AC button is pressed");
	clearAll();
	updateScreen(currentNumber);
});

const decimal = document.querySelector(".decimal");

decimal.addEventListener("click", (event) => {
	// console.log("decimal button is pressed");
	inputDecimal(event.target.value);
	updateScreen(currentNumber);
});
