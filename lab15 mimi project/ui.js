export function renderList(listElem, tasks, removeFn) {
  listElem.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.innerHTML = `${task} <button onclick="removeFn(${index})">Удалить</button>`;
    listElem.appendChild(li);
  });
}