// import _ from 'lodash';
import './style.css';

import * as all from './modules/add-delete-update.js';
import storingTolocalStorage from './modules/local-storage';

// const todoTasks = JSON.parse(localStorage.getItem('todoTasks')) || [];

// Event listener for clear all button
class List {
  constructor() {
    this.tasks = [];
    this.listItems = document.getElementById('list-items');
    this.form = document.getElementById('to-do-form');
    this.addIcon = document.getElementById('add-icon');
    this.clearAllButton = document.getElementById('clear-all');
  }

  accessLocalStorage() {
    const tasks = localStorage.getItem('todoTasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    } else {
      storingTolocalStorage(this.tasks);
    }
  }

  displayTasks() {
    this.listItems.innerHTML = '';
    this.tasks.forEach((task, index) => {
      const taskItem = document.createElement('li');
      taskItem.id = `inner-item ${index}`;
      taskItem.className = 'inner-item';
      taskItem.style.textDecoration = task.completed ? 'line-through' : 'none';
   
      // create checkbox
      const checkBox = document.createElement('input');
      checkBox.setAttribute('type', 'checkbox');
      checkBox.id = 'checkbox';
      checkBox.checked = task.completed;

      // event listener for chckbx
      checkBox.addEventListener('change', (e) => {
        this.tasks = all.toggleCompleted(this.tasks, task);
        storingTolocalStorage(this.tasks);
        this.displayTasks();
      });
      taskItem.appendChild(checkBox);

      // create description
      const todoItem = document.createElement('p');
      todoItem.id = 'todo-item';
      todoItem.textContent = `${task.description}`;
      // event listener
      todoItem.addEventListener('dblclick', ({ target }) => {
        // const target = e.target;
        // target.setAttribute('contenteditable', 'true');
        // const content = document.querySelector('[contenteditable]');
        // content.addEventListener('keyup', (e) => {
        //   e.preventDefault();
        //   if (e.key === 'Enter') {
        //     target.textContent = content.textContent;
        //     target.setAttribute('contenteditable', 'false');
        //   }
        // });
        const editInp = document.createElement('input');
        editInp.setAttribute('type', 'text');
        editInp.value = target.textContent;
        editInp.className = 'edit-input';
        target.parentNode.replaceChild(editInp, target);
        editInp.addEventListener('keyup', (e) => {
          if (e.key === 'Enter') {
            this.tasks = all.editTasks(this.tasks, task, editInp.value)
            storingTolocalStorage(this.tasks);
            this.displayTasks();
          }
        });
      });
      taskItem.appendChild(todoItem);

      // create ellipsis
      const ellipsis = document.createElement('i');
      ellipsis.setAttribute('class', 'fa-solid fa-ellipsis-vertical');
      ellipsis.id = 'ellipsis-icon';
      // add ellipsis event listener
      ellipsis.addEventListener('click', (e) => {
        const removeIcon = document.createElement('a');
        removeIcon.setAttribute('class', ' fa-sharp fa-solid fa-trash');
        removeIcon.id = 'remove-icon';
        removeIcon.addEventListener('click', () => { 
        this.remove(task);
      });
        taskItem.replaceChild(removeIcon, ellipsis);
        console.log(taskItem);
      });
      taskItem.appendChild(ellipsis);

      this.listItems.appendChild(taskItem);
    });
  }

  add(text) {
    const newTask = {
      description: text,
      completed: false,
      index: this.tasks.length + 1,
    };
    this.tasks.unshift(newTask);
    storingTolocalStorage(this.tasks);
    this.displayTasks();
  }

  remove(task) {
    this.tasks = all.clearDoneTasks(this.tasks, task);
    storingTolocalStorage(this.tasks);
    this.displayTasks();
  }

  eventListener() {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      const text = document.getElementById('add-item').value;
      this.add(text);
      this.form.reset();
    });
    this.clearAllButton.addEventListener('click', () => {
      const arr = all.clearAllDone(this.tasks);
      this.tasks = arr;
      storingTolocalStorage(this.tasks);
      this.displayTasks();
    });
  }
}

const list = new List();
list.accessLocalStorage();
list.displayTasks();
list.eventListener();

// function iterateToDoTasks() {
//   const listItems = document.getElementById('list-items');

//   listItems.innerHTML = '';

//   todoTasks.forEach((task, index) => {
//     const taskItem = document.createElement('li');
//     taskItem.id = `inner-item ${index}`;
//     taskItem.classList = 'inner-item';
//     // taskItem.innerText = `${task.description}`;
//     taskItem.style.textDecoration = task.completed ? 'line-through' : 'none';

//     const checkBox = document.createElement('input');
//     checkBox.setAttribute('type', 'checkbox');
//     checkBox.id = 'checkbox';
//     checkBox.checked = task.completed;
//     taskItem.appendChild(checkBox);

//     const todoItem = document.createElement('p');
//     todoItem.id = 'todo-item';
//     todoItem.textContent = `${task.description}`;
//     taskItem.appendChild(todoItem);

//     const ellipsis = document.createElement('i');
//     ellipsis.setAttribute('class', 'fa-solid fa-ellipsis-vertical');
//     ellipsis.id = 'ellipsis-icon';
//     taskItem.appendChild(ellipsis);

//     const removeIcon = document.createElement('a');
//     removeIcon.setAttribute('class', ' fa-sharp fa-solid fa-trash');
//     removeIcon.id = 'remove-icon';
//     removeIcon.style.display = 'none';
//     taskItem.appendChild(removeIcon);

//     // add event listeners for iterated items inside the list container

//     todoItem.addEventListener('dblclick', (e) => {
//       const target = e.target;
//       target.setAttribute('contenteditable', 'true');
//       const content = document.querySelector('[contenteditable]');
//       content.addEventListener('input', (event) => {  console.log(content.innerHTML);
// });
//       // console.log(target);
//     });
//     //   e.preventDefault();
//     //   const todoItem = document.getElementById('todo-item');
//     //   todoItem.innerHTML = todoItem;
//     //   // todoItem.setAttribute('type', 'text');
//     //   // todoItem.id = 'todo-item';
//     //   // todoItem.value = `${task.description}`;
//     //   // todoItem.classList = 'edit-input';
//     //   // taskItem.appendChild(todoItem);
//     // });

//     // todoItem.addEventListener('blur', (e) => {
//     //   e.preventDefault();
//     //   task.description = todoItem.value;
//     //   storingTolocalStorage();
//     //   iterateToDoTasks();
//     // });

//     // label.replaceWith(input);
//     // input.focus();

//     todoItem.addEventListener('keydown', (e) => {
//       e.preventDefault();
//       if (e.key === 'Enter') {
//         task.description = todoItem.value;
//         localStorage.setItem('todoTasks', JSON.stringify(todoTasks));
//         iterateToDoTasks();
//       }
//     });

//     ellipsis.addEventListener('click', (e) => {
//       e.preventDefault();
//       const removeIcon = document.getElementById('remove-icon');
//       ellipsis.style.display = 'none';
//       removeIcon.style.display = 'block';
//     });

//     removeIcon.addEventListener('click', (e) => {
//       e.preventDefault();
//       all.clearDoneTasks(todoTasks, index);
//       // storingTolocalStorage();
// //       iterateToDoTasks();
// //     });

// //     checkBox.addEventListener('change', (e) => {
// //       e.preventDefault();
// //       all.toggleCompleted(todoTasks, task);
// //       // const completed = all.toggleCompleted(todoTasks, task);
// //       storingTolocalStorage();
// //       iterateToDoTasks();
// //     });
// //     listItems.appendChild(taskItem);
// //   });
// // }
// // add event listeners for items outside the list container taht are not being iterated
// // store in local storage
// const form = document.getElementById('to-do-form');
// const addIcon = document.getElementById('add-icon');
// const clearAllButton = document.getElementById('clear-all');

// // const todoItem = document.getElementById('todo-item');

// list.form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const todoItem = document.getElementById('todo-item');
//   const description = todoItem.value;
//   all.addNewTask(todoTasks, description, iterateToDoTasks);
//   storingTolocalStorage();
//   iterateToDoTasks();
//   todoItem.value = '';
// });

// clearAllButton.addEventListener('submit', (e) => {
//   e.preventDefault();
//   // const todoTasks = all.clearAllDone(todoTasks);
//   // const cleared = all.toggleCompleted(todoTasks);
//   // if (cleared) {
//   //   all.clearAllDone(todoTasks);
//   // }
//   toggleCompleted(todoTasks, task);
//   const { cleared } = task;
//   if (cleared) {
//     all.clearAllDone(todoTasks);
//   }
//   storingTolocalStorage();
//   iterateToDoTasks();
//   // if (task.completed) {
//   //   return true;
//   // }
//   // else {
//   //   return false;
//   // };
// });

// addIcon.addEventListener('click', () => {
//   const addYourItem = document.getElementById('add-item');
//   // todoItem.value = `${task.description}`;
//   const description = addYourItem.value;
//   all.addNewTask(todoTasks, description); iterateToDoTasks();
//   addYourItem.value = '';
//   return todoTasks;
// });
// iterateToDoTasks();