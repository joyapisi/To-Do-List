import { iterateToDoTasks } from './iterate-tasks';

export function editTask(todoTasks, index, newDescription) {
  todoTasks[index].description = newDescription;
  iterateToDoTasks(); 
}

let todoTasks = [];
