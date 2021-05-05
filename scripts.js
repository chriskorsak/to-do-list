//shows/hides the new task form
const showHideButton = document.querySelector('#showHideButton');
//new task form
const newTaskForm = document.querySelector('#newTaskForm');
//list of tasks
const list = document.querySelector('#list');

//add click event to showHideButton
showHideButton.addEventListener('click', showHide);
// add submit event to new task form
newTaskForm.addEventListener('submit', submitTask);

// this will show or hide the new task form and change button text
function showHide() {
  if (newTaskForm.style.display === 'block') {
    newTaskForm.style.display = 'none';
    showHideButton.textContent = 'New Task';
  } else {
    newTaskForm.style.display = 'block';
    showHideButton.textContent = 'Hide';
  }
}

// this will run when a new task is submitted
function submitTask(event) {
  //prevent form from submitting to another page
  event.preventDefault();

  //get new task input value
  const newTask = document.getElementById('newTask');
  //get all radio buttons
  const radioGroup = document.querySelectorAll('input[name="priority"]');
  //loop through radio buttons to find checked radio and assign to priorityLevel variable
  let priorityLevel;
  for (let i = 0; i < radioGroup.length; i++) {
    if (radioGroup[i].checked) {
      priorityLevel = radioGroup[i].value;
      break;
    }
  }

  //create new list item
  const newListItem = document.createElement('li');

  //set background color based on priority level
  if (priorityLevel === 'low') {
    newListItem.classList = 'low-priority';
  } else if (priorityLevel === 'medium') {
    newListItem.classList = 'medium-priority';
  } else {
    newListItem.classList = 'high-priority';
  }

  //create span element to hold new list item text
  const spanTaskText = document.createElement('span');
  spanTaskText.classList = 'task-text';

  //add new task input value to span
  spanTaskText.textContent = newTask.value;
  //append span to list item
  newListItem.appendChild(spanTaskText);

  //create button group and buttons for list item
  const buttonGroup = document.createElement('div');
  buttonGroup.classList = 'button-group';
  const completeButton = document.createElement('button');
  completeButton.textContent = 'Complete';
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'X';
  deleteButton.classList = 'button-margin-left';

  buttonGroup.append(completeButton, deleteButton);

  //append button group to list item
  newListItem.appendChild(buttonGroup);
  //append list item to list
  list.prepend(newListItem);

  //clear out new task input field
  newTask.value = '';
}


