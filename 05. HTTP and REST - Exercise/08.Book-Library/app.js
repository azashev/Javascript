function attachEvents() {
  const tBody = document.querySelector('table > tbody');
  const loadBooksBtn = document.getElementById('loadBooks');
  const formBtn = document.querySelector('#form button');
  const formTitle = document.querySelector('#form input[name="title"]');
  const formAuthor = document.querySelector('#form input[name="author"]');
  const formH3 = document.querySelector('#form h3');
  const BASE_URL = 'http://localhost:3030/jsonstore/collections/books/';
  let currentContactId = null;

  loadBooksBtn.addEventListener('click', getAllBooks);
  formBtn.addEventListener('click', formBtnHandler);

  async function getAllBooks() {
    tBody.textContent = '';
    const response = await fetch(BASE_URL);
    const data = await response.json();
    
    for (const bookId in data) {
      const row = document.createElement('tr');
      row.id = bookId;

      const editBtn = document.createElement('button');
      editBtn.textContent = 'Edit';
      editBtn.addEventListener('click', () => editContact(bookId));

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.addEventListener('click', () => deleteContact(bookId));

      const authorTd = document.createElement('td');
      authorTd.textContent = data[bookId].author;

      const titleTd = document.createElement('td');
      titleTd.textContent = data[bookId].title;
      
      const tdBtn = document.createElement('td');

      row.appendChild(titleTd);
      row.appendChild(authorTd);
      tdBtn.appendChild(editBtn);
      tdBtn.appendChild(deleteBtn);
      row.appendChild(tdBtn);
      tBody.appendChild(row);
    }
  }

  function editContact(id) {
    formH3.textContent = 'Edit FORM';
    formBtn.textContent = 'Save';
    currentContactId = id;

    formTitle.value = document.getElementById(id).children[0].textContent;
    formAuthor.value = document.getElementById(id).children[1].textContent;
  }

  async function deleteContact(id) {
    try {
      const response = await fetch(`${BASE_URL}${id}`, {method: 'DELETE'});
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
      getAllBooks();
    } catch (error) {
      alert(error);
    }
  }

  async function formBtnHandler() {
      const newAuthor = formAuthor.value;
      const newTItle = formTitle.value;
    if (formBtn.textContent == 'Save') {
      try {
        const httpHeaders = {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            "title": newTItle,
            "author": newAuthor
          })
        };
  
        const response = await fetch(`${BASE_URL}${currentContactId}`, httpHeaders);
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }
        formTitle.value = '';
        formAuthor.value = '';
        formH3.textContent = 'FORM';
        formBtn.textContent = 'Submit';
  
        await getAllBooks();
  
      } catch (error) {
        alert(error);
      }
    } else if (formBtn.textContent == 'Submit') {
        if (newAuthor.trim() && newTItle.trim()) {
          const httpHeaders = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              'author': newAuthor,
              'title': newTItle
            })
          }

          try {
            const response = await fetch(BASE_URL, httpHeaders);
            if (!response.ok) {
              throw new Error(`${response.status} ${response.statusText}`);
            }

            formAuthor.value = '';
            formTitle.value = '';
            await getAllBooks();

          } catch (error) {
            alert(error);
          }
        }
    }
  }
}

attachEvents();
