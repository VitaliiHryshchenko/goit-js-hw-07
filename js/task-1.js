const categories = document.querySelector('#categories');
const title = document.querySelectorAll('h2');
const item = document.querySelectorAll('.item');
const liItems = document.querySelectorAll('ul> li>ul>li');
categories.classList.add('container');
item[0].classList.add('block-first');
item[1].classList.add('block-second');
item[2].classList.add('block-third');
liItems.forEach(li => li.classList.add('item-list'));
console.log(`Number of categories: ${categories.children.length}`);
item.forEach(element => {
  console.log(`Category: ${element.children[0].textContent}`);
  console.log(`Elements: ${element.children[1].children.length}`);
});
