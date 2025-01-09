let display = document.getElementById('display');
let currentInput = '';
let operator = null;
let previousInput = '';

function appendNumber(number) {
    currentInput += number;
    display.innerText = currentInput;
}

function appendOperator(op) {
    if (currentInput === '' && operator === null) return;
    if (operator !== null) calculate();
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

function appendDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        display.innerText = currentInput;
    }
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = null;
    display.innerText = '0';
}

function calculate() {
    let result;
    let prev = parseFloat(previousInput);
    let current = parseFloat(currentInput);

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

    currentInput = result;
    operator = null;
    previousInput = '';
    display.innerText = result;
}
