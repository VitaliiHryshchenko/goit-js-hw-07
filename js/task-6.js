function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const elements = document.querySelectorAll('#controls button');
const boxeElement = document.querySelector('#boxes');
const reader = document.querySelector('#controls input');
let boxSize = 20; // змінна для розмірів елемента
reader.addEventListener('input', handleRead);
// вішаємо слухача подій на інпут для отримання значення яке вводить юзер.
function handleRead(event) {
  boxSize = 20;
  return event.currentTarget.value;
}
elements[0].addEventListener('click', handleClick);
// вішаємо слухача подій на кнопку create
function handleClick(event) {
  boxeElement.innerHTML = ''; // очищаємо колекцію перед створенням нової.
  const numberOfBoxes = parseInt(reader.value, 10); // витягуємо значення яке ввели в імпут та перетворюємо йоно на число.
  if (numberOfBoxes >= 1 && numberOfBoxes <= 100) {
    // валідуємо число яке ввели в імпут, чи відповідає дане число умовам задачі.
    for (let i = 0; i < numberOfBoxes; i++) {
      // запускаємо цикл, щоб створити кількість об'єктів яка відповідаю введеному числу в інпут.
      const div = document.createElement('div');
      div.style.backgroundColor = getRandomHexColor();
      boxSize += 10;
      div.style.width = `${boxSize}px`;
      div.style.height = `${boxSize}px`;
      boxeElement.append(div);
      // створення одного об'єкту в розмітці HTML.
    }
  }
  reader.value = '';
}
elements[1].addEventListener('click', deleteColection);
function deleteColection(event) {
  boxeElement.innerHTML = '';
  boxSize = 20;
}
