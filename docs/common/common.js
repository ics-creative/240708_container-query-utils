const updateValueDisplay = (element, value) => {
  element.textContent = value + "px";
}
const updateValueVariable = (element, value) => {
  element.style.setProperty("--value", value + "px");
}

const containers = document.querySelectorAll('.js-container');

containers.forEach((container) => {
  const valueDisplay = container.querySelector('.js-range-valueDisplay');
  const inputElement = container.querySelector('.js-range-value');

  if(inputElement == null || valueDisplay == null) {
    return;
  }

  updateValueDisplay(valueDisplay, inputElement.value);
  updateValueVariable(container, inputElement.value);

  inputElement.addEventListener("input", (event) => {
    updateValueDisplay(valueDisplay, event.target.value);
    updateValueVariable(container, event.target.value);
  });
})
