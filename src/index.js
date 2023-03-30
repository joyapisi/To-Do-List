// import _ from 'lodash';
import './style.css';

import addNewTask from './modules/add-task.js';
import deleteTask from './modules/delete-task.js';
import editTask from './modules/edit-task.js';

let todoTasks = [];

// class TodoTasks {
//   constructor(description, completed, index) {
//     this.description = description;
//     this.completed = completed;
//     this.index = index;
//   }
// }

function iterateToDoTasks() {
  const listItems = document.getElementById('list-items');

  listItems.innerHTML = '';

  todoTasks.forEach((task, index) => {
    const taskItem = document.createElement('li');
    taskItem.id = `inner-item-${index}`;
    listItems.appendChild(taskItem);

    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.id = 'checkbox';
    checkBox.checked = task.completed;
    taskItem.appendChild(checkBox);

    const todoItem = document.createElement('input');
    todoItem.setAttribute('type', 'text');
    todoItem.id = 'todo-item';
    todoItem.value = `${task.description}`;
    taskItem.appendChild(todoItem);

    const ellipsis = document.createElement('a');
    ellipsis.setAttribute('class', 'fa-solid fa-ellipsis-vertical');
    ellipsis.id = 'ellipsis-icon';
    taskItem.appendChild(ellipsis);

    const removeIcon = document.createElement('a');
    removeIcon.setAttribute('class', 'fa-sharp fa-solid fa-trash');
    removeIcon.id = 'remove-icon';
    removeIcon.classList = 'remove-icon';
    taskItem.appendChild(removeIcon);
  });
}

iterateToDoTasks();

// Storing to local storage
function saveToDoTasks() {
  localStorage.setItem('todoTasks', JSON.stringify(todoTasks));
}
// saveToDoTasks();

function retrieveToDoTasks() {
  const storedItems = localStorage.getItem('todoTasks');
  // || '[]'
  if (storedItems) {
    todoTasks = JSON.parse(storedItems);
    iterateToDoTasks();
    // return storedItems;
  }
}
retrieveToDoTasks();

// Add event listeners to actions

// const addIcon = document.getElementById('add-icon');
const todoForm = document.getElementById('to-do-form');
todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const description = todoForm.getElementById('description').value;
  addNewTask(description);
  saveToDoTasks();
  todoForm.reset();
});

const listItems = document.getElementById('list-items');
listItems.addEventListener('change', (e) => {
  const checkbox = e.target;
  const { index } = checkbox.parentElement.dataset;
  todoTasks[index].completed = checkbox.checked;
  saveToDoTasks();
});

listItems.addEventListener('input', (e) => {
  const input = e.target;
  const { index } = input.parentElement.dataset;
  editTask(index, input.value);
  saveToDoTasks();
});

// let nearestTask;
const taskItem = document.createElement('inner-item');
listItems.addEventListener('click', (e) => {
  const { target } = e;
  // nearestTask = target.closest('#inner-item');
  if (target.classList.contains('remove-icon')) {
    const index = todoTasks.findIndex((task) => taskItem === task.item);
    deleteTask(index);
    saveToDoTasks();
  }
});

retrieveToDoTasks();

// // Saving to local storage
// function saveToDoTasks() {
//   localStorage.setItem('todoTasks', JSON.stringify(todoTasks));
// }

// // Retrieve items from local storage
// function retrieveToDoList() {
//   const storedItems = localStorage.getItem('todoTasks');
//   if (storedItems) {
//     todoTasks = JSON.parse(storedItems);
//     iterateToDoTasks();
//   }
// }

// // Adding event listener to add icons
// // const  addTaskForm = document.getElementById('to-do-form');
// // addTaskForm.addEventListener('submit', (e) => {
// //   e.preventDefault();
// //   const description = addTaskForm.elements['description'].value;
// //   addNewTask(description);
// //   saveToDoTasks();
// //   addTaskForm.reset();
// // });

// // Add event listeners to the list items
// const listItems = document.getElementById('list-items');
// listItems.addEventListener('change', (event) => {
//   const checkbox = event.target;
//   const index = checkbox.parentElement.dataset.index;
//   todoTasks[index].completed = checkbox.checked;
//   saveToDoTasks();
// });

// listItems.addEventListener('input', (event) => {
//   const input = event.target;
//   const index = input.parentElement.dataset.index;
//   editTask(index, input.value);
//   saveToDoTasks();
// });

// listItems.addEventListener('click', (event) => {
//   const target = event.target;
//   const item = target.closest('li');
//   if (target.classList.contains('delete-icon')) {
//     const index = item.dataset.index;
//     deleteTask(index);
//     saveToDoTasks();
//   }
// });

// retrieveToDoList();
