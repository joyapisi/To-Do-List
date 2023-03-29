function deleteTask(index) {
  todoTasks.splice(index, 1);
  iterateToDoTasks();
}