// import _ from 'lodash';
import './style.css';

import { iterateToDoTasks } from './modules/iterate-tasks';
import { addNewTask } from './modules/add-task.js';
import { deleteTask } from './modules/delete-task.js';
import { editTask } from './modules/edit-task.js';


  let todoTasks = [];

  // Event listener for clear all button
  const clearAllButton = document.getElementById('clear-all');
  clearAllButton.addEventListener('click', (e) => {
    e.preventDefault();
    todoTasks = todoTasks.filter((task) => !task.completed);
    iterateToDoTasks();
  });

  // Event listener for add icon
  const addTask = document.getElementById('add-item');
  const addIcon = document.getElementById('add-icon');
  addIcon.addEventListener('click', (e) => {
    e.preventDefault();
    const description = addTask.value.trim();
    if (description) {
      addNewTask(todoTasks, description);
      addTask.value = '';
    }
  });

// Storing to local storage
function saveToDoTasks() {
  localStorage.setItem('todoTasks', JSON.stringify(todoTasks));
}
saveToDoTasks();

function retrieveToDoTasks() {
  const storedItems = localStorage.getItem('todoTasks');
  if (storedItems) {
    todoTasks = JSON.parse(storedItems);
    iterateToDoTasks();
  }
}

// Add event listeners to actions
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

const taskItem = document.createElement('inner-item');
listItems.addEventListener('click', (e) => {
  const { target } = e;
  if (target.classList.contains('remove-icon')) {
    const index = todoTasks.findIndex((task) => taskItem === task.item);
    deleteTask(index);
    saveToDoTasks();
  }
});

retrieveToDoTasks();