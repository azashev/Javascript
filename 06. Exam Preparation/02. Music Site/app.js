window.addEventListener('load', solve);

function solve() {
    // Input DOM elements
    const inputDomElements = {
        genre: document.getElementById('genre'),
        name: document.getElementById('name'),
        author: document.getElementById('author'),
        date: document.getElementById('date')
    }

    const allHitsContainer = document.querySelector('.all-hits-container');
    const savedContainer = document.querySelector('.saved-container');
    const addBtn = document.getElementById('add-btn');
    addBtn.addEventListener('click', addEventHandler);
    const likes = document.querySelector('.likes > p');
    let likesCounter = 0;

    // Adding a song
    function addEventHandler(e) {
        const allFieldsNotEmpty = Object.values(inputDomElements)
        .every((input) => input.value !== '');

        if (!allFieldsNotEmpty) {
            return;
        }

        e.preventDefault();
        const hitsInfo = createElement('div', '', allHitsContainer, null, ['hits-info']);
        createElement('img', '', hitsInfo, null, null, {src: './static/img/img.png'});
        createElement('h2', `Genre: ${inputDomElements.genre.value}`, hitsInfo);
        createElement('h2', `Name: ${inputDomElements.name.value}`, hitsInfo);
        createElement('h2', `Author: ${inputDomElements.author.value}`, hitsInfo);
        createElement('h3', `Date: ${inputDomElements.date.value}`, hitsInfo);
        const saveBtn = createElement('button', 'Save song', hitsInfo, null, ['save-btn']);
        const likeBtn = createElement('button', 'Like song', hitsInfo, null, ['like-btn']);
        const deleteBtn = createElement('button', 'Delete', hitsInfo, null, ['delete-btn']);
        
        saveBtn.addEventListener('click', saveEventHandler);
        likeBtn.addEventListener('click', likeEventHandler);
        deleteBtn.addEventListener('click', deleteEventHandler);

        // Clearing inputs
        for (const element of Object.values(inputDomElements)) {
            element.value = '';
        }
    }

    function saveEventHandler() {
        const container = this.parentNode;
        const saveBtn = container.querySelector('.save-btn');
        const likeBtn = container.querySelector('.like-btn');

        saveBtn.remove();
        likeBtn.remove();

        savedContainer.appendChild(container);
    }

    function likeEventHandler() {
        likesCounter++;
        likes.textContent = `Total Likes: ${likesCounter}`;
        this.disabled = true;
    }

    function deleteEventHandler() {
        const container = this.parentNode;
        container.remove();
    }

    
    function createElement(type, content, parentNode, id, classes, attributes) {
        const htmlElement = document.createElement(type);
       
        if (content && type !== 'input' && type !== 'textarea') {
          htmlElement.textContent = content;
        }
       
        if (content && (type === 'input' || type === 'textarea')) {
          htmlElement.value = content;
        }
       
        if (id) {
          htmlElement.id = id;
        }
       
        // ['list', 'item']
        if (classes) {
          htmlElement.classList.add(...classes);
        }
       
        // {src: 'link to image', href: 'link to site', etc.}
        if (attributes) {
          for (const key in attributes) {
            htmlElement.setAttribute(key, attributes[key]);
          }
        }
       
        if (parentNode) {
          parentNode.appendChild(htmlElement);
        }
       
        return htmlElement;
      }
}
