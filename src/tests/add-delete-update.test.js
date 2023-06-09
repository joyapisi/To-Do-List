import * as all from '../modules/add-delete-update.js';

describe('editTasks', () => {
  const tasks = [
    { index: 0, description: 'Task 1' },
    { index: 1, description: 'Task 2' },
    { index: 2, description: 'Task 3' },
  ];

  const target = { index: 1, description: 'Task 2' };
  const text = 'Updated Task 2';

  test('updates the description of the specified task', () => {
    const updatedTasks = all.editTasks(tasks, target, text);

    expect(updatedTasks.length).toBe(tasks.length);
    expect(updatedTasks[0]).toBe(tasks[0]);
    expect(updatedTasks[1].description).toBe(text);
    expect(updatedTasks[2]).toBe(tasks[2]);
  });

  test('does not modify the original tasks array', () => {
    const updatedTasks = all.editTasks(tasks, target, text);

    expect(updatedTasks).not.toBe(tasks);
    expect(tasks[1].description).toBe('Task 2');
  });
});

describe('toggleCompleted', () => {
  const tasks = [
    { index: 1, description: 'Task 1', completed: false },
    { index: 2, description: 'Task 2', completed: true },
    { index: 3, description: 'Task 3', completed: false },
  ];

  test('should toggle the completed status of a task', () => {
    const task = { index: 1, description: 'Task 1', completed: false };
    const expectedTasks = [
      { index: 1, description: 'Task 1', completed: true },
      { index: 2, description: 'Task 2', completed: true },
      { index: 3, description: 'Task 3', completed: false },
    ];
    expect(all.toggleCompleted(tasks, task)).toEqual(expectedTasks);
  });

  test('should throw an error if task is not found in tasks', () => {
    const task = { index: 4, description: 'Task 4', completed: false };
    expect(() => all.toggleCompleted(tasks, task)).toThrow('Task not found');
  });
});

test('clearAllDone should remove completed tasks from tasks array', () => {
  const tasks = [
    { index: 1, description: 'Task 1', completed: true },
    { index: 2, description: 'Task 2', completed: false },
    { index: 3, description: 'Task 3', completed: true },
    { index: 4, description: 'Task 4', completed: false },
  ];
  const expected = [
    { index: 1, description: 'Task 2', completed: false },
    { index: 2, description: 'Task 4', completed: false },
  ];
  const result = all.clearAllDone(tasks);
  expect(result).toEqual(expected);
});
