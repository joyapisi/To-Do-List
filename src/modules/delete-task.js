import { iterateToDoTasks } from './iterate-tasks';

export function deleteTask(todoTasks, index) {
  todoTasks.splice(index, 1);
  todoTasks.forEach((todoTasks, index) => {
    todoTasks.index = index;
    iterateToDoTasks(); 
  });
}

let todoTasks = [];
