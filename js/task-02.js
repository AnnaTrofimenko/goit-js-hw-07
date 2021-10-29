const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientConteinerEl = document.querySelector('ul');

const makeIngredients = (elements) => {
    return elements.map(element => {
        const listEl = document.createElement('li');
        listEl.textContent = element;
        return listEl;
    });
}
const lists = makeIngredients(ingredients);
ingredientConteinerEl.append(...lists);
console.log(ingredientConteinerEl);
