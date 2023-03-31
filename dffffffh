/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
import _ from 'lodash';
import './style.css';
import myImage from './imges/cartoon.jpg';


import { updateCompletedStatus, clearCompleted } from './modules/status.js';
import addTask from './modules/Add.js';
import deleteTask from './modules/delete.js';
import { markAsComplete, markAsIncomplete } from './modules/statusupdate.js';

const taskList = document.getElementById('task-list');
const form = document.querySelector('form');

let items = JSON.parse(localStorage.getItem('items')) || [];

function renderTasks() {
  taskList.innerHTML = '';
  items.forEach((task) => {
    const listItem = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => {
      updateCompletedStatus(task, items);
      localStorage.setItem('items', JSON.stringify(items));
      renderTasks();
    });

    const labelWrapper = document.createElement('div');
    labelWrapper.classList.add('label-wrapper');

    const label = document.createElement('label');
    label.innerText = task.description;
    label.style.textDecoration = task.completed ? 'line-through' : 'none';
    label.addEventListener('dblclick', () => {
      const input = document.createElement('input');
      input.type = 'text';
      input.value = task.description;
      input.classList.add('edit-input');
      input.addEventListener('blur', () => {
        task.description = input.value;
        localStorage.setItem('items', JSON.stringify(items));
        renderTasks();
      });
      input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          task.description = input.value;
          localStorage.setItem('items', JSON.stringify(items));
          renderTasks();
        }
      });
      label.replaceWith(input);
      input.focus();
    });

    const dotsIcon = document.createElement('i');
    dotsIcon.classList.add('fas', 'fa-ellipsis-v', 'dots-icon');
    dotsIcon.addEventListener('click', () => {
      deleteIcon.style.display = 'block';
      dotsIcon.style.display = 'none';
    });

    const deleteIcon = document.createElement('i');
    deleteIcon.classList.add('fas', 'fa-trash', 'delete-icon');
    deleteIcon.addEventListener('click', () => {
      deleteTask(items, task.index);
      localStorage.setItem('items', JSON.stringify(items));
      renderTasks();
    });
    labelWrapper.appendChild(checkbox);
    labelWrapper.appendChild(label);
    labelWrapper.appendChild(dotsIcon);
    labelWrapper.appendChild(deleteIcon);

    listItem.appendChild(labelWrapper);
    taskList.appendChild(listItem);
  });
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const input = document.getElementById('item');
  const description = input.value;
  addTask(items, description);
  localStorage.setItem('items', JSON.stringify(items));
  renderTasks();
  input.value = '';
});

const clearButton = document.getElementById('submit');
clearButton.addEventListener('click', () => {
  items = clearCompleted(items);
  localStorage.setItem('items', JSON.stringify(items));
  renderTasks();
});

const plusIcon = document.querySelector('.input-icon i');
plusIcon.addEventListener('click', () => {
  const input = document.getElementById('item');
  const description = input.value;
  addTask(description, items, renderTasks);
  input.value = '';
});

const addIcon = document.getElementById('add-icon');

addIcon.addEventListener('click', () => {
  const input = document.getElementById('item');
  const description = input.value.trim();
  if (description) {
    addTask(items, description);
    localStorage.setItem('items', JSON.stringify(items));
    renderTasks();
    input.value = '';
  }
});
const img = document.querrySelector('.contain');
img.src = myImage;
document.body.appendChild(img);

renderTasks();