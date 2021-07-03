window.onload = function() {
  const executeBtn = document.getElementById('execute');
  executeBtn.addEventListener('click', () => {
    alert('execute button clicked');
  });

  const deleteBtn = document.getElementById('delete');
  deleteBtn.addEventListener('click', () => {
    alert('delete button clicked');
  });
};
