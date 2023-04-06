window.addEventListener("load", solve);

function solve() {
  const inputDomElements = {
    firstName: document.getElementById('first-name'),
    lastName: document.getElementById('last-name'),
    age: document.getElementById('age'),
    genre: document.getElementById('genre'),
    storyTitle: document.getElementById('story-title'),
    storyText: document.getElementById('story'),
  }

  const previewList = document.getElementById('preview-list');

  const publishBtn = document.getElementById('form-btn');
  publishBtn.addEventListener('click', publishEventHandler);

  let storyObj = {};

  function publishEventHandler() {
    const allFieldsNotEmpty = Object.values(inputDomElements)
        .every((input) => input.value !== '');

        if (!allFieldsNotEmpty) {
            return;
        }

    // Create the list and the elements
    const liStoryInfo = document.createElement('li');
    liStoryInfo.className = 'story-info';

    const article = document.createElement('article');

    const h4 = document.createElement('h4');
    h4.textContent = `Name: ${inputDomElements.firstName.value} ${inputDomElements.lastName.value}`;

    const ageParagraph = document.createElement('p');
    ageParagraph.textContent = `Age: ${inputDomElements.age.value}`;

    const titleParagraph = document.createElement('p');
    titleParagraph.textContent = `Title: ${inputDomElements.storyTitle.value}`;

    const genreParagraph = document.createElement('p');
    genreParagraph.textContent = `Genre: ${inputDomElements.genre.value}`;

    const storyTextParagraph = document.createElement('p');
    storyTextParagraph.textContent = inputDomElements.storyText.value;

    const saveBtn = document.createElement('button');
    saveBtn.className = 'save-btn';
    saveBtn.textContent = 'Save Story';
    saveBtn.addEventListener('click', saveBtnEventHandler);
        
    const editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.textContent = 'Edit Story';
    editBtn.addEventListener('click', editBtnEventHandler);

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete Story';
    deleteBtn.addEventListener('click', deleteBtnEventHandler);

    article.appendChild(h4);
    article.appendChild(ageParagraph);
    article.appendChild(titleParagraph);
    article.appendChild(genreParagraph);
    article.appendChild(storyTextParagraph);

    liStoryInfo.appendChild(article);
    liStoryInfo.appendChild(saveBtn);
    liStoryInfo.appendChild(editBtn);
    liStoryInfo.appendChild(deleteBtn);

    previewList.appendChild(liStoryInfo);

    publishBtn.disabled = true;

    storyObj = {
      firstName: inputDomElements.firstName.value,
      lastName: inputDomElements.lastName.value,
      age: inputDomElements.age.value,
      genre: inputDomElements.genre.value,
      storyTitle: inputDomElements.storyTitle.value,
      storyText: inputDomElements.storyText.value,
    }

    // Clear elements
    for (const element of Object.values(inputDomElements)) {
      element.value = '';
  }
  }

  function saveBtnEventHandler() {
    const mainDiv = document.getElementById('main');
    mainDiv.textContent = '';

    const h1 = document.createElement('h1');
    h1.textContent = 'Your scary story is saved!';
    mainDiv.appendChild(h1);
  }

  function editBtnEventHandler() {
    const storyInfo = this.parentNode;
    
    inputDomElements.firstName.value = storyObj.firstName;
    inputDomElements.lastName.value = storyObj.lastName;
    inputDomElements.age.value = storyObj.age;
    inputDomElements.genre.value = storyObj.genre;
    inputDomElements.storyTitle.value = storyObj.storyTitle;
    inputDomElements.storyText.value = storyObj.storyText;

    storyInfo.remove();

    publishBtn.disabled = false;
  }

  function deleteBtnEventHandler() {
    const storyInfo = this.parentNode;
    storyInfo.remove();
    publishBtn.disabled = false;
  }
}
