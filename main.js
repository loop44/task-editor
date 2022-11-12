import createSubTask from './createSubTask';
import createTodoItem from './createTodoItem';
import { pullTodosFromLS, saveTodosToLS } from './localStorage';

import './style.css';

const todos = pullTodosFromLS();

const form = document.getElementById('todoForm');
const newTodoButton = document.querySelector('.normal.black');
const colnames = document.querySelector('.colnames');
const plusSubtaskButton = document.getElementById('plusSubtask');
const taskNameInput = document.getElementById('taskName');
const todoList = document.querySelector('.task-list-items');

const removeSubtask = (e) => {
  e.preventDefault();
  // If our element to be removed is the last one, we hide the table cols
  if (Array.from(document.querySelectorAll('.input-block')).length === 1) {
    colnames.style.display = 'none';
  }
  e.currentTarget.closest('.input-block').remove();
};

const clearFormState = () => {
  taskNameInput.value = '';
  colnames.style.display = 'none';
  Array.from(document.querySelectorAll('.input-block')).forEach((item) => {
    item.remove();
  });
};

const loadTodoToForm = (item) => {
  clearFormState();
  taskNameInput.value = item.name;
  const tasks = item.subtasks.slice(0);
  tasks.reverse().forEach((subtask) => {
    colnames.style.display = 'grid';
    colnames.after(createSubTask(removeSubtask, subtask));
  });
};

const renderTodos = (todoItems) => {
  todoItems.forEach((item) => {
    todoList.append(createTodoItem(item, loadTodoToForm));
  });
};

renderTodos(pullTodosFromLS());

// Listeners

plusSubtaskButton.addEventListener('click', (e) => {
  e.preventDefault();
  colnames.style.display = 'grid';

  colnames.after(createSubTask(removeSubtask));
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const task = {};

  task.name = taskNameInput.value;

  task.subtasks = Array.from(document.querySelectorAll('.input-block')).map((el) => ({
    name: el.querySelector(`input[type="text"]`).value,
    time: el.querySelector(`input[type="number"]`).value
  }));

  todos.unshift(task);

  saveTodosToLS(todos);

  todoList.prepend(createTodoItem(task, loadTodoToForm));
  clearFormState();
});

newTodoButton.addEventListener('click', (e) => {
  e.preventDefault();
  clearFormState();
});
