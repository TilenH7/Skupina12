const display = document.getElementById('display');

function appendValue(value) {
    display.value += value;
}

function calculate() {
    try {
        display.value = eval(display.value); // Izvede izračun
    } catch (error) {
        display.value = 'Napaka';
    }
}

function clearDisplay() {
    display.value = '';
}