import storingTolocalStorage from '../modules/local-storage.js';

// Define a mock localStorage object
const localStorageMock = (() => {
  let store = {};
  return {
    getItem: jest.fn((key) => store[key] || null),
    setItem: jest.fn((key, value) => {
      store[key] = value.toString();
    }),
    removeItem: jest.fn((key) => {
      delete store[key];
    }),
    clear: jest.fn(() => {
      store = {};
    }),
  };
})();

// Mock the global localStorage object
global.localStorage = localStorageMock;

describe('storingTolocalStorage', () => {
  test('should store array in localStorage as stringified JSON', () => {
    const arr = [1, 2, 3];

    storingTolocalStorage(arr);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(localStorage.setItem).toHaveBeenCalledWith('tasks', JSON.stringify(arr));
  });
});
