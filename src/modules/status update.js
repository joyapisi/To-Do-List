const toggleCompleted = (todoTasks, task) => {
  const index = todoTasks.findIndex((item) => item.index === task.index);
  todoTasks[index].completed = !todoTasks[index].completed;
  return todoTasks;
};

export default toggleCompleted;