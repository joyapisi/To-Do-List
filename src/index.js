// import _ from 'lodash';
import './style.css';

import * as all from './modules/add-delete-update.js';

const todoTasks = JSON.parse(localStorage.getItem('todoTasks')) || [];

// Event listener for clear all button

function iterateToDoTasks() {
  const listItems = document.getElementById('list-items');

  listItems.innerHTML = '';

  todoTasks.forEach((task, index) => {
    const taskItem = document.createElement('li');
    taskItem.id = `inner-item ${index}`;
    taskItem.classList = 'inner-item';
    taskItem.innerText = `${task.description}`;
    taskItem.style.textDecoration = task.completed ? 'line-through' : 'none';

    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.id = 'checkbox';
    checkBox.checked = task.completed;
    taskItem.appendChild(checkBox);

    const todoItem = document.createElement('input');
    todoItem.setAttribute('type', 'text');
    todoItem.id = 'todo-item';
    todoItem.value = `${task.description}`;
    todoItem.classList = 'edit-input';
    taskItem.appendChild(todoItem);
    // taskItem.replaceWith(todoItem);
    // todoItem.focus();

    const ellipsis = document.createElement('a');
    ellipsis.setAttribute('class', 'fa-solid fa-ellipsis-vertical');
    ellipsis.id = 'ellipsis-icon';
    taskItem.appendChild(ellipsis);

    const removeIcon = document.createElement('a');
    removeIcon.setAttribute('class', 'active, fa-sharp fa-solid fa-trash');
    removeIcon.id = 'remove-icon';
    removeIcon.style.display = 'none';
    taskItem.appendChild(removeIcon);

    // add event listeners for iterated items inside the list container

    checkBox.addEventListener('change', (e) => {
      e.preventDefault();
      all.editTasks(todoTasks, index, task.completed);
      localStorage.setItem('todoTasks', JSON.stringify(todoTasks));
      iterateToDoTasks();
    });

    taskItem.addEventListener('click', (e) => {
      e.preventDefault();
      const todoItem = document.getElementById('todo-item');
      todoItem.setAttribute('type', 'text');
      todoItem.id = 'todo-item';
      todoItem.value = `${task.description}`;
      todoItem.classList = 'edit-input';
      taskItem.appendChild(todoItem);
    });

    todoItem.addEventListener('blur', (e) => {
      e.preventDefault();
      task.description = todoItem.value;
      localStorage.setItem('todoTasks', JSON.stringify(todoTasks));
      iterateToDoTasks();
    });

    todoItem.addEventListener('keydown', (e) => {
      e.preventDefault();
      if (e.key === 'Enter') {
        task.description = todoItem.value;
        localStorage.setItem('todoTasks', JSON.stringify(todoTasks));
        iterateToDoTasks();
      }
    });

    ellipsis.addEventListener('click', (e) => {
      e.preventDefault();
      const removeIcon = document.getElementById('remove-icon');
      ellipsis.style.display = 'none';
      removeIcon.style.display = 'block';
    });

    removeIcon.addEventListener('click', (e) => {
      e.preventDefault();
      all.clearDoneTasks(todoTasks, index);
      localStorage.setItem('todoTasks', JSON.stringify(todoTasks));
      iterateToDoTasks();
    });
    listItems.appendChild(taskItem);
  });
}
// add event listeners for items outside the list container taht are not being iterated
// store in local storage
const form = document.getElementById('to-do-form');
const addIcon = document.getElementById('add-icon');
const clearAllButton = document.getElementById('clear-all');

// const todoItem = document.getElementById('todo-item');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const todoItem = document.getElementById('todo-item');
  const description = todoItem.value;
  all.addNewTask(todoTasks, description, iterateToDoTasks);
  localStorage.setItem('todoTasks', JSON.stringify(todoTasks));
  iterateToDoTasks();
  todoItem.value = '';
});

clearAllButton.addEventListener('click', (e) => {
  e.preventDefault();
  // const todoTasks = todoTasks.filter((task) => !task.completed);
  const todoTasks = all.clearDoneTasks(todoTasks);
  localStorage.setItem('todoTasks', JSON.stringify(todoTasks));
  iterateToDoTasks();
});


addIcon.addEventListener('click', () => {
  const addYourItem = document.getElementById('add-item');
  // todoItem.value = `${task.description}`;
  const description = addYourItem.value;
  all.addNewTask(todoTasks, description); iterateToDoTasks();
  addYourItem.value = '';
  return todoTasks;
});

// addIcon.addEventListener('click', () => {
//   const addIcon = document.getElementById('add-item');
//   const todoItem =document.getElementById('todo-item');
//   // todoItem.value = `${task.description}`;
//   const description = todoItem.value;
//   all.addNewTask(todoTasks, description, iterateToDoTasks);
//   todoItem.value = '';
// }); 

// addIcon.addEventListener('click', () => {
//   const todoItem = document.getElementById('todo-item');
//   const description = todoItem.value.trim();
//   if (description) {
//     all.addNewTask(todoTasks, description);
//     localStorage.setItem('todoTasks', JSON.stringify(todoTasks));
//     todoItem.value = '';
//   }
// });
iterateToDoTasks();