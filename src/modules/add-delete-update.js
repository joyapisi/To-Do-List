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

function resetAll(todoTasks) {
  return todoTasks.map((task, i) => ({ ...task, index: i }));
}

function clearAllDone(todoTasks) {
  // todoTasks.filter((task) => !task.completed);
  // todoTasks = resetAll(todoTasks);
  // storingTolocalStorage();
  // return todoTasks;
  for (let i = 0; i < todoTasks.length; i += 1) {
    if (todoTasks[i].completed) {
      todoTasks.splice(i, 1);
      i -= 1;
    }
  }
}

export { editTasks, clearDoneTasks, addNewTask, toggleCompleted, clearAllDone };