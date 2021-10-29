const decrBtn = document.querySelector('[data-action="decrement"]')
const incrBtn = document.querySelector('[data-action="increment"]')
const countEl = document.getElementById('value')

let counterValue = 0

decrBtn.addEventListener('click', () => {
  counterValue -= 1;
  countEl.textContent = counterValue;
}) 

incrBtn.addEventListener('click', () => {
  counterValue += 1;
  countEl.textContent = counterValue;
})
