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
function handleRead(event) {
  boxeElement.innerHTML = '';
  boxSize = 20;
  return event.currentTarget.value;
}
elements[0].addEventListener('click', handleClick);
function handleClick(event) {
  const numberOfBoxes = parseInt(reader.value, 10);
  if (numberOfBoxes >= 1 && numberOfBoxes <= 100) {
    for (let i = 0; i < numberOfBoxes; i++) {
      const div = document.createElement('div');
      div.style.backgroundColor = getRandomHexColor();
      boxSize += 10;
      div.style.width = `${boxSize}px`;
      div.style.height = `${boxSize}px`;
      boxeElement.append(div);
    }
  }
  reader.value = '';
}
elements[1].addEventListener('click', deleteColection);
function deleteColection(event) {
  boxeElement.innerHTML = '';
  boxSize = 20;
}
