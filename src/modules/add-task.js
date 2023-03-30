function addNewTask(tasks, description) {
    const newTask = {
      description: description,
      completed: false,
      index: tasks.length
    };
       tasks.push(newTask);
}

export default addNewTask;