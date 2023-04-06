function solve() {
    let info = {};
    const inputDomElements = {
        recipientName: document.getElementById('recipientName'),
        title: document.getElementById('title'),
        message: document.getElementById('message')
    }

    const addToListBtn = document.getElementById('add');
    addToListBtn.addEventListener('click', addToListHandler);

    const resetBtn = document.getElementById('reset');
    resetBtn.addEventListener('click', resetEventHandler);

    const listMailsDiv = document.getElementById('list');
    const listSentMails = document.querySelector('.sent-list');
    const listDeletedEmails = document.querySelector('.delete-list');
    
    function addToListHandler(e) {
        e.preventDefault();

        const noEmptyFields = Object.values(inputDomElements)
        .every((inputField) => inputField.value !== '');
        if (!noEmptyFields) {
            return;
        }

        const li = createElement('li', '', listMailsDiv);
        createElement('h4', `Title: ${inputDomElements.title.value}`, li);
        createElement('h4', `Recipient Name: ${inputDomElements.recipientName.value}`, li);
        createElement('span', inputDomElements.message.value, li);
        const listActionDiv = createElement('div', '', li, 'list-action');
        const sendBtn = createElement('button', 'Send', listActionDiv, 'send', null, {type: 'submit'});
        sendBtn.addEventListener('click', sendEventHandler);
        const deleteBtn = createElement('button', 'Delete', listActionDiv, 'delete', null, {type: 'submit'});
        deleteBtn.addEventListener('click', deleteEventHandler);

        for (const key in inputDomElements) {
            info[key] = inputDomElements[key].value;
        }
        Object.values(inputDomElements)
        .forEach((input) => input.value = '');
    }

    function resetEventHandler(e) {
        e.preventDefault();
        Object.values(inputDomElements)
        .forEach((input) => input.value = '');
    }

    function sendEventHandler() {
        const li = createElement('li', '', listSentMails);
        createElement('span', `To: ${info.recipientName}`, li);
        createElement('span', `Title: ${info.title}`, li);
        const div = createElement('div', '', li, null, ['btn']);
        const sentMailsDeleteBtn = createElement('button', 'Delete', div, null, ['delete'], {type: 'submit'});
        sentMailsDeleteBtn.addEventListener('click', deleteEventHandler);
        listSentMails.appendChild(li);

        info = {};
        this.parentElement.parentElement.remove();
    }

    function deleteEventHandler() {
        const email = this.parentElement.parentElement;
        const recipientNameElement = email.querySelector('h4:nth-child(2)') || email.querySelector('span:nth-child(1)');
        const titleElement = email.querySelector('h4:nth-child(1)') || email.querySelector('span:nth-child(2)');
    
        const recipientName = recipientNameElement.textContent.replace('Recipient Name: ', '').replace('To: ', '');
        const title = titleElement.textContent.replace('Title: ', '');

        const li = createElement('li', '', listDeletedEmails);
        createElement('span', `To: ${recipientName}`, li);
        createElement('span', `Title: ${title}`, li);

        email.remove();
    }

    function createElement(type, content, parentNode, id, classes, attributes){
        const htmlElement = document.createElement(type)
       
        if(content && type !== 'input'){
          htmlElement.textContent = content;
        }
       
        if(content && type === 'input'){
          htmlElement.value = content;
        }
       
        if(id){
          htmlElement.id = id;
        }
       
        if (classes){
          htmlElement.classList.add(...classes);
        }
       
        if (parentNode){
          parentNode.appendChild(htmlElement);
          }
       
        //{ src: 'link to img', href: 'link to site' }
        if (attributes){
          for (const key in attributes) {
            htmlElement.setAttribute(key, attributes[key]); 
          }
        } 
        return htmlElement
      }
}
solve()
