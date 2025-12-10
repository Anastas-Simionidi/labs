export function filterTasks(tasks, searchText) {
  return tasks.filter(t => t.toLowerCase().includes(searchText.toLowerCase()));
}