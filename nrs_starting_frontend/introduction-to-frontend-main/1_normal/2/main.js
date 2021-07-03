window.onload = function() {
  console.log('test');
  const executeButton = document.getElementById('execute');
  executeButton.addEventListener('click', function() {
    document.getElementById('message').textContent = 'execute button clicked';
    document.getElementById('result').textContent = 'test';
  });
  const deleteButton = document.getElementById('delete');

  deleteButton.addEventListener('click', function() {
    document.getElementById('message').textContent = 'delete button clicked';
    document.getElementById('result').textContent = '';
  });
};
