function storingTolocalStorage(arr) {
  localStorage.setItem('todoTasks', JSON.stringify(arr));
}

export default storingTolocalStorage;