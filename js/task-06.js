const validInput = document.querySelector("#validation-input");
const validInputLength = validInput.dataset.length;

validInput.addEventListener("blur", onInputBlur);

function onInputBlur() {
  if (validInput.value.length !== validInputLength) {
    validInput.classList.add("invalid");
    validInput.classList.remove("valid");
  } else {
    validInput.classList.add("valid");
    validInput.classList.remove("invalid");
  }
}
