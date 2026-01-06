let currentNumber = '';
let operator = '';
let previousNumber = '';

const resultInput = document.getElementById('result');

function appendNumber(number) {
    currentNumber += number;
    resultInput.value = currentNumber;
}

function setOperator(op) {
    operator = op;
    previousNumber = currentNumber;
    currentNumber = '';
}

function clearDisplay() {
    currentNumber = '';
    operator = '';
    previousNumber = '';
    resultInput.value = '';
}

function calculate() {
    let result;
    const prev = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }

    currentNumber = result.toString();
    operator = '';
    previousNumber = '';
    resultInput.value = result;
}
