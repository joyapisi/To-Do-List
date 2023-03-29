import _ from 'lodash';
import './style.css';

const todoTasks = [
  {
    description: "Wash dishes",
    completed: false,
    index: 0
  },
  {
    description: "Do laundry",
    completed: false,
    index: 1
  },
  {
    description: "Buy groceries",
    completed: true,
    index: 2
  }
];

function iterateToDoTasks() {
  const listItems = document.getElementById("list-items"); 

  listItems.innerHTML = "";

  todoTasks.forEach(task => {
    const taskItem = document.createElement("li");
    taskItem.setAttribute("id", "inner-item");
    listItems.innerHTML = `${task.description} ${task.completed ? "(completed)" : ""}`;
    listItems.appendChild(taskItem);

    const checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    checkBox.id = "checkbox"
    taskItem.appendChild(checkBox);

    const todoItem = document.createElement("input");
    checkBox.setAttribute("type", "text");
    checkBox.id = "todo-item"
    taskItem.appendChild(checkBox);

    const ellipsis = document.createElement("a");
    checkBox.setAttribute("class", "fa-solid fa-ellipsis-vertical");
    checkBox.id = "ellipsis-icon"
    taskItem.appendChild(ellipsis);
  });
}




// function component() {
//   const element = document.createElement('div');

  // Lodash, now imported by this script
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  // element.classList.add('hello');

//   return element;
// }

// document.body.appendChild(component());

