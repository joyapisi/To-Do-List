function clearDoneTasks(todoTasks, task) {
  const index = todoTasks.findIndex((item) => item.index === task.index);
  todoTasks.splice(index, 1);
  todoTasks.forEach((task, index) => {
    task.index = todoTasks.length - index;
  });
  return todoTasks;
}

function editTasks(todoTasks, target, text) {
  return todoTasks.map((task) => {
    if (task.index === target.index) {
      task.description = text;
      return task;
    }
    return task;
  });
}

function toggleCompleted(todoTasks, task) {
  const index = todoTasks.findIndex((item) => item.index === task.index);
  todoTasks[index].completed = !todoTasks[index].completed;
  return todoTasks;
}

function clearAllDone(todoTasks) {
  const newArr = todoTasks.filter((task) => task.completed === false);
  newArr.forEach((task, i) => {
    task.index = newArr.length - i;
  });
  return newArr;
}

export {
  editTasks, clearDoneTasks, toggleCompleted, clearAllDone,
};