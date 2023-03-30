function deleteTask(tasks, index) {
  tasks.splice(index, 1);
  tasks.forEach((task, index) => {
    task.index = index;
  });
}

export default deleteTask;