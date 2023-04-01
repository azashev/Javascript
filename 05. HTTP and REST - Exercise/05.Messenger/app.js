function attachEvents() {
    const textArea = document.getElementById('messages');
    const sendBtn = document.getElementById('submit');
    const refreshBtn = document.getElementById('refresh');
    const BASE_URL = 'http://localhost:3030/jsonstore/messenger';

    refreshBtn.addEventListener('click', getComments);
    sendBtn.addEventListener('click', send);

    async function getComments() {
        textArea.value = '';
        try {
            const response = await fetch(`${BASE_URL}`);
            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
            const data = await response.json();
            const messages = Object.values(data)
            .map((element) => `${element.author}: ${element.content}`);
            textArea.value = messages.join('\n');
        } catch (error) {
            alert(error);
        }
    }

    async function send() {
        const authorInput = document.querySelector('input[name="author"]');
        const msgInput = document.querySelector('input[name="content"]');
        
        const postData = {
            author: authorInput.value,
            content: msgInput.value
        }
        const response = await fetch(BASE_URL, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(postData)
        });
        authorInput.value = '';
        msgInput.value = '';
        getComments();
    }
}

attachEvents();
