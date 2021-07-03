window.onload = function() {
  const executeButton = document.getElementById('execute');
  executeButton.addEventListener('click', function() {
    const messageParagraph = document.getElementById('message');
    messageParagraph.textContent = 'execute button clicked';

    const request = new XMLHttpRequest();
    request.onreadystatechange = () => {
      if (request.readyState === 4) {
        if (request.status === 200) {
          const resultSpan = document.getElementById('result');
          const resultJson = JSON.parse(request.responseText);
          resultSpan.textContent = resultJson.uuid;
          messageParagraph.textContent = 'response received';
        }
      }
    };
    request.open('GET', 'https://httpbin.org/uuid', true);
    request.send(null);
  });

  const deleteButton = document.getElementById('delete');
  deleteButton.addEventListener('click', function() {
    const messageParagraph = document.getElementById('message');
    messageParagraph.textContent = 'delete button clicked';

    const resultParagraph = document.getElementById('result');
    resultParagraph.textContent = '';
  });
};
