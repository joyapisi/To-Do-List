let todoTasks = [];

export function iterateToDoTasks() {
    const listItems = document.getElementById('list-items');
  
    listItems.innerHTML = '';
  
    todoTasks.forEach((task, index) => {
      const taskItem = document.createElement('li');
      taskItem.id = `inner-item-${index}`;
      listItems.appendChild(taskItem);
  
      const checkBox = document.createElement('input');
      checkBox.setAttribute('type', 'checkbox');
      checkBox.id = 'checkbox';
      checkBox.checked = task.completed;
      taskItem.appendChild(checkBox);
  
      const todoItem = document.createElement('input');
      todoItem.setAttribute('type', 'text');
      todoItem.id = 'todo-item';
      todoItem.value = `${task.description}`;
      taskItem.appendChild(todoItem);
  
      const ellipsis = document.createElement('a');
      ellipsis.setAttribute('class', 'fa-solid fa-ellipsis-vertical');
      ellipsis.id = 'ellipsis-icon';
      taskItem.appendChild(ellipsis);
  
      const removeIcon = document.createElement('a');
      removeIcon.setAttribute('class', 'fa-sharp fa-solid fa-trash');
      removeIcon.id = 'remove-icon';
      removeIcon.classList = 'remove-icon';
      taskItem.appendChild(removeIcon);

      ellipsis.addEventListener('click', (e) => {
        e.preventDefault();
        ellipsis.style.display = 'none';
        removeIcon.style.display = 'inline-block';
      });
  
      removeIcon.addEventListener('click', (e) => {
        e.preventDefault();
        const index = parseInt(taskItem.id.split('-')[2]);
        todoTasks.splice(index, 1);
        iterateToDoTasks();
    });
  });
}