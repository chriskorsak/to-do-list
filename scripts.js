//GLOBAL VARIABLES

//shows/hides the new task form
const showHideButton = document.querySelector('#showHideButton');
//new task form
const newTaskForm = document.querySelector('#newTaskForm');
//list of tasks
const list = document.querySelector('#list');
//new task input
const newTask = document.getElementById('newTask');
//new task submit button
const submitButton = document.getElementById('newTaskSubmit');

//DISABLE SUBMIT BUTTON

//disable submit button by default until input has text
submitButton.disabled = true;
newTask.addEventListener('keyup', function() {
  if (newTask.value.length > 0) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
})

//EVENT HANDLERS

//add click event to showHideButton
showHideButton.addEventListener('click', showHide);
// add submit event to new task form
newTaskForm.addEventListener('submit', submitTask);
// add click event to entire list
list.addEventListener('click', completeDeleteTask);

//FUNCTIONS

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
  //disable submit button on new task form
  submitButton.disabled = true;
}

function completeDeleteTask(event) {
  if (event.target.textContent === 'Complete') {
    //get list item of clicked complete button
    const li = event.target.parentElement.parentElement;
    //lowers list element opacity
    li.classList.add('completed');
  }
  if (event.target.textContent === 'X') {
    //get list item of clicked delete button
    const li = event.target.parentElement.parentElement;
    list.removeChild(li);
  }
}


