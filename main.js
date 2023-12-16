let displayValue = '';
let currentOperation = '';
const numberButtons = document.querySelectorAll('.numbers');

document.getElementById('display').addEventListener('input', function (event) {
    displayValue = event.target.value;
});

numberButtons.forEach(function(button) {
    button.addEventListener('click', function (event) {
        const buttonValue = event.target.innerText;

        if (buttonValue === '=') {
            calculateResult();
        } else if (buttonValue === 'C') {
            clearDisplay();
        } else {
            appendToDisplay(buttonValue);
        }
    });
});

document.querySelector('.operations_container').addEventListener('click', function (event) {
    const operation = event.target.innerText;
    if (operation !== '=') {
        setCurrentOperation(operation);
    }
});

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = displayValue;
    currentOperation = '';
}

function setCurrentOperation(operation) {
    currentOperation = operation;
    displayValue += ` ${operation} `;
    document.getElementById('display').value = displayValue;
}

function calculateResult() {
    try {
        document.getElementById('display').value = eval(displayValue);
        displayValue = document.getElementById('display').value;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
// function calculateResult() {
//     try {
//         const result = evaluateExpression(displayValue);
//         document.getElementById('display').value = result;
//         displayValue = result.toString(); // Convierte el resultado a cadena para futuras operaciones
//     } catch (error) {
//         document.getElementById('display').value = 'Error';
//     }
// }

// function evaluateExpression(expression) {
//     const tokens = expression.split(' ');
//     const numbers = [];
//     const operators = [];

//     for (let token of tokens) {
//         if (!isNaN(parseFloat(token))) {
//             numbers.push(parseFloat(token));
//         } else if (['+', '-', '*', '/'].includes(token)) {
//             operators.push(token);
//         }
//     }

//     if (numbers.length !== operators.length + 1) {
//         throw new Error('Expresión inválida');
//     }

//     let result = numbers[0];

//     for (let i = 0; i < operators.length; i++) {
//         const operand = numbers[i + 1];

//         switch (operators[i]) {
//             case '+':
//                 result += operand;
//                 break;
//             case '-':
//                 result -= operand;
//                 break;
//             case '*':
//                 result *= operand;
//                 break;
//             case '/':
//                 if (operand === 0) {
//                     throw new Error('División por cero');
//                 }
//                 result /= operand;
//                 break;
//             default:
//                 throw new Error('Operador no válido');
//         }
//     }

//     return result;
// }
