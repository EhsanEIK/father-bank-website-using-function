function getElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValue = parseFloat(element.value);
    element.value = '';
    return elementValue;
}

function getInnerTextById(elementId) {
    const element = document.getElementById(elementId);
    const elementValue = parseFloat(element.innerText);
    return elementValue;
}

function setInnerTextById(elementId, valueOfInnerText) {
    const element = document.getElementById(elementId);
    element.innerText = valueOfInnerText;
}

function add(valueOne, valueTwo) {
    const sum = valueOne + valueTwo;
    return sum;
}