const createTodoItem = (item, loadTodo) => {
  const taskListItem = document.createElement('div');
  taskListItem.className = 'task-list-item';

  const marker = document.createElement('div');
  marker.className = 'marker';

  const subtaskBlock = document.createElement('div');
  subtaskBlock.className = 'list-item-subtasks';

  const taskName = document.createElement('p');
  taskName.innerText = item.name;

  const taskList = document.createElement('ul');

  item.subtasks.forEach((subtask) => {
    const subtaskElement = document.createElement('li');
    subtaskElement.innerText = `${subtask.name} - ${subtask.time}h`;
    taskList.append(subtaskElement);
  });

  const button = document.createElement('button');
  button.className = 'normal';
  button.innerText = 'Load';
  button.addEventListener('click', (e) => {
    e.preventDefault();
    loadTodo(item);
  });

  taskListItem.append(marker);
  taskListItem.append(subtaskBlock);
  taskListItem.append(button);
  subtaskBlock.append(taskName);
  subtaskBlock.append(taskList);

  return taskListItem;
};

export default createTodoItem;
