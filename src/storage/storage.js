const STORAGE_KEY = 'todos-vue';

export function getTodos() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
}

export function addTodo(todo) {
  const todos = getTodos();
  todos.push(todo);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

export function updateTodo(id, updateFn) {
  const todos = getTodos();
  const index = todos.findIndex((todo) => todo.id === id);
  if (index !== -1) {
    todos[index] = updateFn(todos[index]);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }
}

export function removeTodo(id) {
  const todos = getTodos();
  const index = todos.findIndex((todo) => todo.id === id);
  if (index !== -1) {
    todos.splice(index, 1);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }
}
