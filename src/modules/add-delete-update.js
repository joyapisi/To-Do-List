import storingTolocalStorage from './local-storage.js';

function clearDoneTasks(todoTasks, task) {
  const index = todoTasks.findIndex((item) => item.index === task.index);
  todoTasks.splice(index, 1);
  todoTasks.forEach((task, index) => {
    task.index = todoTasks.length - index;    
  });
  return todoTasks;
}

function editTasks(todoTasks, index, newDescription) {
  todoTasks[index].description = newDescription;
  storingTolocalStorage();
}

function toggleCompleted(todoTasks, task) {
  const index = todoTasks.findIndex((item) => item.index === task.index);
  todoTasks[index].completed = !todoTasks[index].completed;
  return todoTasks;
}

function resetAll(todoTasks) {
  return todoTasks.map((task, i) => ({ ...task, index: i }));
}

function clearAllDone(todoTasks) {
  const newArr = todoTasks.filter((task) => task.completed === false);
  newArr.forEach((task, index) => {
    task.index = todoTasks.length - index;
  });
  return newArr;
}

export { editTasks, clearDoneTasks, toggleCompleted, clearAllDone };