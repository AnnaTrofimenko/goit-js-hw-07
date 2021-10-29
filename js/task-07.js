const inpytEl = document.querySelector('#font-size-control')
const text = document.querySelector('#text')

inpytEl.addEventListener('input', onChangeText)
function onChangeText() {
    text.style.fontSize = inpytEl.value + 'px';
}