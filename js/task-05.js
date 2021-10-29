let input = document.querySelector('#name-input')
let nameLabl = document.querySelector('#name-output')

input.addEventListener('input', onInputChange)

function onInputChange(event) {
    if (input.value === '') {
        nameLabl.textContent = 'незнакомец';
    } else {
        nameLabl.textContent = event.currentTarget.value;
    }
}

