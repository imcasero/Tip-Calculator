import { processData } from "./dataProcess";

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
