const clearDoneTasks = (tasks, task) => {
  const index = tasks.findIndex((item) => item.index === task.index);
  tasks.splice(index, 1);
  tasks.forEach((task, index) => {
    task.index = tasks.length - index;
  });
  return tasks;
};

const editTasks = (tasks, target, text) => tasks.map((task) => {
  if (task.index === target.index) {
    return { ...task, description: text };
  }
  return task;
});

const toggleCompleted = (tasks, task) => {
  const index = tasks.findIndex((item) => item.index === task.index);
  if (index === -1) {
    throw new Error('Task not found');
  }
  tasks[index].completed = !tasks[index].completed;
  return tasks;
};

const clearAllDone = (tasks) => {
  const newArr = tasks.filter((task) => task.completed === false);
  newArr.forEach((task, i) => {
    task.index = i + 1;
  });
  return newArr;
};

export {
  editTasks, clearDoneTasks, toggleCompleted, clearAllDone,
};