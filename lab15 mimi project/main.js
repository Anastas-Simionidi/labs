import { saveTasks, loadTasks } from './storage.js';
import { renderList } from './ui.js';
import { filterTasks } from './utils.js';

let tasks = loadTasks();

const input = document.getElementById('taskInput');
const searchInput = document.getElementById('searchInput');
const listElem = document.getElementById('taskList');

window.removeFn = function(index) {
  tasks.splice(index, 1);
  saveTasks(tasks);
  refresh();
};

document.getElementById('addBtn').addEventListener('click', () => {
  const text = input.value.trim();
  if (text) {
    tasks.push(text);
    saveTasks(tasks);
    input.value = '';
    refresh();
  }
});

searchInput.addEventListener('input', () => refresh());

function refresh() {
  const filtered = filterTasks(tasks, searchInput.value);
  renderList(listElem, filtered, window.removeFn);
}

refresh();