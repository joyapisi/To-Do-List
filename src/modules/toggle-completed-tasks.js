function toggleCompleted(todoTasks, index) {
  todoTasks[index].completed = !todoTasks[index].completed;
  localStorage.setItem('todoTasks', JSON.stringify(todoTasks));
}
export default { toggleCompleted };