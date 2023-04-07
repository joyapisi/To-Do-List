function storingTolocalStorage(arr) {
  localStorage.setItem('tasks', JSON.stringify(arr));
}

export default storingTolocalStorage;