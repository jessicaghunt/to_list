console.log('My code is running');
let form = document.querySelector('#packForm');
let input = document.querySelector('#packInput');
let list = document.querySelector('#packingList');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const itemText = input.value.trim();
    if (itemText === '') return;
    addPackingItem(itemText);
    input.value = ''; 
  });

function addPackingItem(text) {
   const li = document.createElement('li');
   li.textContent = text;

   li.addEventListener('click', () => li.classList.toggle('done'));

   const removeButton = document.createElement('button');
   removeButton.textContent = 'Remove From List';
   removeButton.classList.add('remove-btn');
   removeButton.addEventListener('click', (e) => {
    e.stopPropagation();
    li.remove();
   });

   li.appendChild(removeButton);
   list.appendChild(li);
}

document.querySelectorAll('#packingList li').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('complete');
    });
});