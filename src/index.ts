function updateTipValue(value: string): void {
  const tipValueElement: HTMLElement | null =
    document.getElementById("tipValue");
  if (tipValueElement) {
    tipValueElement.textContent = value;
  }
}
const tipPercentageInput: HTMLInputElement | null = document.getElementById(
  "tipPercentage"
) as HTMLInputElement;
if (tipPercentageInput) {
  tipPercentageInput.addEventListener("input", () => {
    updateTipValue(tipPercentageInput.value);
  });
}

function handleCalculateButtonClick(event: MouseEvent) {
  event.preventDefault();

  const loader = document.getElementById("loader") as HTMLElement;
  const calculateButton = document.getElementById(
    "calculateButton"
  ) as HTMLButtonElement;

  loader.style.display = "flex"; // Mostrar el loader

  // Simulación de carga durante 1 segundo
  setTimeout(() => {
    const billAmountInput = document.getElementById(
      "billAmount"
    ) as HTMLInputElement;
    const tipPercentageInput = document.getElementById(
      "tipPercentage"
    ) as HTMLInputElement;

    const billAmount = parseFloat(billAmountInput.value);
    const tipPercentage = parseFloat(tipPercentageInput.value);
    const result = billAmount + billAmount * (tipPercentage / 100);

    loader.style.display = "none"; // Ocultar el loader después de 1 segundo

    createPopup(result);
  }, 2000);
}

const calculateButton = document.getElementById("calculateButton");
if (calculateButton) {
  calculateButton.addEventListener("click", handleCalculateButtonClick);
}

function createPopup(result: number): void {
  const popupContainer = document.createElement("div");
  popupContainer.classList.add("popup-container");

  const popupContent = document.createElement("div");
  popupContent.classList.add("popup-content");

  const resultText = document.createElement("p");
  resultText.textContent = "The result is: ";

  const resultSpan = document.createElement("span");
  resultSpan.textContent = `${result}`;
  resultSpan.classList.add("result"); // Agregar clase "result"

  const closeButton = document.createElement("button");
  closeButton.classList.add("popup-close");
  closeButton.textContent = "Close";
  closeButton.addEventListener("click", () => {
    popupContainer.remove();
  });

  resultText.appendChild(resultSpan); // Agregar el span al párrafo
  popupContent.appendChild(resultText);
  popupContent.appendChild(closeButton);
  popupContainer.appendChild(popupContent);

  document.body.appendChild(popupContainer);
}
