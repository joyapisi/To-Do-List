import { iterateToDoTasks } from './iterate-tasks';

export function addNewTask(todoTasks, description) {
  const newTask = {
    description,
    completed: false,
    index: todoTasks.length,
  };
  todoTasks.push(newTask);
  iterateToDoTasks();
}

let todoTasks = [];

// export default { addNewTask, todoTasks }; 