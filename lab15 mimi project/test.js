import { filterTasks } from './utils.js';
import { saveTasks, loadTasks } from './storage.js';

test('Фильтрация работает корректно', () => {
  const sample = ['дом', 'работа', 'еда'];
  const result = filterTasks(sample, 'до');
  expect(result).toEqual(['дом']);
});

test('Сохранение и загрузка', () => {
  const sample = ['a', 'b'];
  saveTasks(sample);
  const loaded = loadTasks();
  expect(loaded).toEqual(sample);
});