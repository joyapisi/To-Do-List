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

function clearDoneTasks(todoTasks, index) {
  todoTasks.splice(index, 1);
  todoTasks.forEach((task, index) => {
    task.index = index;
  });
}

function editTasks(todoTasks, index, newDescription) {
  todoTasks[index].description = newDescription;
  storingTolocalStorage();
}

function toggleCompleted(todoTasks, task) {
  const index = todoTasks.findIndex((item) => item.index === task.index);
  todoTasks[index].completed = !todoTasks[index].completed;
  storingTolocalStorage();
}

function clearAllDone(todoTasks) {
  return todoTasks.filter((task) => !task.completed);
}

export { editTasks, clearDoneTasks, addNewTask, toggleCompleted, clearAllDone };