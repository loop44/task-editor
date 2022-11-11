const createSubTask = (removeSubtask, subtask = null) => {
  const tableRowWrapper = document.createElement('div');
  tableRowWrapper.className = 'table-row input-block';

  const subTaskNameInput = document.createElement('input');
  subTaskNameInput.type = 'text';
  subTaskNameInput.placeholder = 'New subtask...';
  subTaskNameInput.required = true;
  subTaskNameInput.value = subtask ? subtask.name : '';

  const subTaskTimeInput = document.createElement('input');
  subTaskTimeInput.type = 'number';
  subTaskTimeInput.value = subtask ? subtask.time : 0;
  subTaskTimeInput.min = 0;

  const removeButtonWrapper = document.createElement('div');
  const removeButton = document.createElement('button');
  const removeButtonIcon = document.createElement('img');

  removeButton.className = 'rounded';
  removeButton.onclick = removeSubtask;

  removeButtonIcon.src = '/close.svg';
  removeButtonIcon.alt = '';

  removeButton.append(removeButtonIcon);
  removeButtonWrapper.append(removeButton);

  tableRowWrapper.append(subTaskNameInput);
  tableRowWrapper.append(subTaskTimeInput);
  tableRowWrapper.append(removeButtonWrapper);

  return tableRowWrapper;
};

export default createSubTask;
