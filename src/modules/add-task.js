function addNewTask(todoTasks, description) {
  const newTask = {
    description,
    completed: false,
    index: todoTasks.length,
  };
  todoTasks.push(newTask);
}

export default addNewTask;