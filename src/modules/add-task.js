function addNewTask(description) {
    const newTask = {
      description: description,
      completed: false,
      index: todoTasks.length
    };
       todoTasks.push(newTask);
    iterateToDoTasks();
}