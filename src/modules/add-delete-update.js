import storingTolocalStorage from './local-storage.js';

function addNewTask(todoTasks, description) {
  const newTask = {
    description,
    completed: false,
    index: todoTasks.length + 1,
  };
  todoTasks.push(newTask);
  storingTolocalStorage();
}

function clearDoneTasks(todoTasks) {
  todoTasks = todoTasks.filter((task) => !task.completed);
}

function editTasks(todoTasks, index, newDescription) {
  todoTasks[index].description = newDescription;
  storingTolocalStorage();
}

export { editTasks, clearDoneTasks, addNewTask };