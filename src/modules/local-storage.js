const todoTasks = JSON.parse(localStorage.getItem('todoTasks')) || [];

function storingTolocalStorage() {
  localStorage.setItem('todoTasks', JSON.stringify(todoTasks));
}

export default storingTolocalStorage;