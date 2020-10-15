//global variables

let primaryValue = undefined;
let operandActive = undefined;
let clearDisplay = false;


//operations


function add(x, y) {
    return x + y;
}

function substract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

//main function

function operate(operator, x, y) {

    if (primaryValue) {
        switch (operator) {
            case 'add':
                display.value = add(x, y);
                operandActive = undefined;
                clearDisplay = true;
                break;
            case 'substract':
                display.value = substract(x, y);
                operandActive = undefined;
                clearDisplay = true;
                break;
            case 'multiply':
                display.value = multiply(x, y);
                operandActive = undefined;
                clearDisplay = true;
                break;
            case 'divide':
                display.value = divide(x, y);
                operandActive = undefined;
                clearDisplay = true;
                break;
            default:
                return 'err';
        }
    }

}

//display

let display = document.querySelector('#input');
display.value = 0;

function updateDisplay() {
    if (display.value == 0) { display.value = '' };
    if (clearDisplay) {
        display.value = '';
        clearDisplay = false;
    };

    display.value += +this.innerText;
}

//number presses

let numberedBtn = document.querySelectorAll('.js-number');
numberedBtn.forEach(x => x.addEventListener('click', updateDisplay));

//clear

function clear() {
    display.value = 0;
    primaryValue = undefined;
    operandActive = undefined;
}

document.querySelector('#btn-clear').addEventListener('click', clear);

//operators
let operatorBtn = document.querySelectorAll('.js-operator');
operatorBtn.forEach(x => x.addEventListener('click', addOperation));

function addOperation() {
    operate(operandActive, +primaryValue, +display.value);
    operandActive = this.getAttribute('operator');
    primaryValue = +display.value;
    clearDisplay = true;

}

//result button

document.querySelector('#btn-result').addEventListener('click', () => operate(operandActive, +primaryValue, +display.value));


