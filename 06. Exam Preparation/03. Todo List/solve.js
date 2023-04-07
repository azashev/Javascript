function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/tasks/';
    const addBtn = document.getElementById('add-button');
    const loadAllBtn = document.getElementById('load-button');
    const titleInput = document.getElementById('title');
    const ulTodoList = document.getElementById('todo-list');
  
    addBtn.addEventListener('click', addTaskEventListener);
    loadAllBtn.addEventListener('click', loadListEventHandler);
  
    async function loadListEventHandler(event) {
      if (event) event.preventDefault();
      try {
          ulTodoList.textContent = '';
          const res = await fetch(BASE_URL);
          const data = await (res.json());
          
          for (const task in data) {
              const li = document.createElement('li');
              li.id = data[task]._id;
  
              const span = document.createElement('span');
              span.textContent = data[task].name;
  
  
              const removeBtn = document.createElement('button');
              removeBtn.textContent = 'Remove';
              removeBtn.addEventListener('click', removeTaskEventHandler);
  
              const editBtn = document.createElement('button');
              editBtn.textContent = 'Edit';
              editBtn.addEventListener('click', editTaskEventHandler);
  
              li.appendChild(span);
              li.appendChild(removeBtn);
              li.appendChild(editBtn);
  
              ulTodoList.appendChild(li);
          }
  
      } catch (error) {
          console.log(error);
      }
    }
  
    async function addTaskEventListener(event) {
      event.preventDefault();
      const titleInputValue = titleInput.value;
  
      if (titleInputValue !== '') {
          const httpHeaders = {
              method: 'POST',
              headers: {'Content-type': 'application/json'},
              body: JSON.stringify({
                  name: titleInputValue
              })
          }
          const res = await fetch(BASE_URL, httpHeaders);
          if (res.ok) {
              titleInput.value = '';
              loadListEventHandler();
      
          }
      }
    }
  
    async function removeTaskEventHandler() {
      try {
          const task = this.parentNode;
          const res = await fetch(`${BASE_URL}${task.id}`, {
              method: 'DELETE'
          });
          await loadListEventHandler();
      } catch (error) {
          console.log(error);
      }
    }
  
    function editTaskEventHandler() {
      const task = this.parentNode;
      const taskName = task.querySelector('span').textContent;
  
      const inputField = document.createElement('input');
      inputField.value = taskName;
      task.prepend(inputField);
  
      task.querySelector('span').remove();
      this.remove();
  
      const submitBtn = document.createElement('button');
      submitBtn.textContent = 'Submit';
      submitBtn.addEventListener('click', (e) => submitTaskEventHandler(e, inputField.value));
  
      task.appendChild(submitBtn);    
    }
  
    async function submitTaskEventHandler(e, taskName) {
      try {
          const taskId = e.target.parentNode.id;
      const httpHeaders = {
          method: 'PATCH',
          headers: {'Content-type': 'appliation/json'},
          body: JSON.stringify({
              name: taskName
          })
      }
      const res = await fetch(`${BASE_URL}${taskId}`, httpHeaders)
      if (res.ok) {
          titleInput.value = '';
          await loadListEventHandler();
      }
      } catch (error) {
          console.log(error);
      }
    }
  }
  
  attachEvents();
