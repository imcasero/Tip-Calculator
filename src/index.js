"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function updateTipValue(value) {
    var tipValueElement = document.getElementById("tipValue");
    if (tipValueElement) {
        tipValueElement.textContent = value;
    }
}
var tipPercentageInput = document.getElementById("tipPercentage");
if (tipPercentageInput) {
    tipPercentageInput.addEventListener("input", function () {
        updateTipValue(tipPercentageInput.value);
    });
}
