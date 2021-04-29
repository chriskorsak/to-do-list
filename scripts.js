//shows/hides the new task form
const showHideButton = document.querySelector('#showHideButton');
//new task form
const newTaskForm = document.querySelector('#newTaskForm');
//list of tasks
const list = document.querySelector('#list');

//add click event to showHideButton
showHideButton.addEventListener('click', showHide);

function showHide() {
  if (newTaskForm.style.display === 'none') {
    newTaskForm.style.display = 'block';
  } else {
    newTaskForm.style.display = 'none';
  }
}
