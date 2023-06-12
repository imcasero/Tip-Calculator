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
function handleCalculateButtonClick(event) {
    event.preventDefault();
    var loader = document.getElementById("loader");
    var calculateButton = document.getElementById("calculateButton");
    loader.style.display = "flex"; // Mostrar el loader
    // Simulación de carga durante 1 segundo
    setTimeout(function () {
        var billAmountInput = document.getElementById("billAmount");
        var tipPercentageInput = document.getElementById("tipPercentage");
        var billAmount = parseFloat(billAmountInput.value);
        var tipPercentage = parseFloat(tipPercentageInput.value);
        var result = billAmount + billAmount * (tipPercentage / 100);
        loader.style.display = "none"; // Ocultar el loader después de 1 segundo
        createPopup(result);
    }, 2000);
}
var calculateButton = document.getElementById("calculateButton");
if (calculateButton) {
    calculateButton.addEventListener("click", handleCalculateButtonClick);
}
function createPopup(result) {
    var popupContainer = document.createElement("div");
    popupContainer.classList.add("popup-container");
    var popupContent = document.createElement("div");
    popupContent.classList.add("popup-content");
    var resultText = document.createElement("p");
    resultText.textContent = "The result is: ";
    var resultSpan = document.createElement("span");
    resultSpan.textContent = "".concat(result);
    resultSpan.classList.add("result"); // Agregar clase "result"
    var closeButton = document.createElement("button");
    closeButton.classList.add("popup-close");
    closeButton.textContent = "Close";
    closeButton.addEventListener("click", function () {
        popupContainer.remove();
    });
    resultText.appendChild(resultSpan); // Agregar el span al párrafo
    popupContent.appendChild(resultText);
    popupContent.appendChild(closeButton);
    popupContainer.appendChild(popupContent);
    document.body.appendChild(popupContainer);
}
