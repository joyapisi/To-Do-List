// import _ from 'lodash';
import './style.css';
import './modules/add-task';
import './modules/delete-task';
import './modules/edit-task';

const todoTasks = [];

function iterateToDoTasks() {
  const listItems = document.getElementById('list-items');

  listItems.innerHTML = '';

  todoTasks.forEach((task) => {
    const taskItem = document.createElement('li');
    taskItem.id = 'inner-item';
    listItems.appendChild(taskItem);

    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.id = 'checkbox';
    checkBox.checked = todoTasks.completed;
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
  });
}

iterateToDoTasks();