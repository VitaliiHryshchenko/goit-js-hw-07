const categories = document.querySelector('#categories');
const title = document.querySelectorAll('h2');
const item = document.querySelectorAll('.item');

console.log(`Number of categories: ${categories.children.length}`);
item.forEach(element => {
  console.log(`Category: ${element.children[0].textContent}`);
  console.log(`Elements: ${element.children[1].children.length}`);
});
