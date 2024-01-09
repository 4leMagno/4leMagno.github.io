//let x = 10
//console.log(x)
// atividade 1 
let display = document.getElementById('resultado');
let currentInput = '';

function clean() {
    currentInput = '';
    updateDisplay();
}

function back() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function insert(value) {
    currentInput += value;
    updateDisplay();
}

function calcular() {
    try {
        currentInput = eval(currentInput).toString();
        updateDisplay();
    } catch (error) {
        currentInput = 'Erro';
        updateDisplay();
    }
}

function updateDisplay() {
    display.textContent = currentInput;
}




