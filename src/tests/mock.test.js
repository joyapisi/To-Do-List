test('Add an li - new task, to the list', () => {
  document.body.innerHTML =
      '<ul id="list-items">' +
      '  <li></li>' +
      '</ul>';
  add();
  const list = document.querySelectorAll('#list li');
  expect(list).toHaveLength(1);
});