export const saveTodosToLS = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

export const pullTodosFromLS = () => {
  const data = JSON.parse(localStorage.getItem('todos'));
  return data || [];
};
