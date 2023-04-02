function attachEvents() {
    const phonebookUl = document.getElementById('phonebook');
    const btnLoad = document.getElementById('btnLoad');
    const btnCreate = document.getElementById('btnCreate');
    const personInput = document.getElementById('person');
    const phoneInput = document.getElementById('phone');
    const BASE_URL = 'http://localhost:3030/jsonstore/phonebook/';

    btnLoad.addEventListener('click', loadContacts);
    btnCreate.addEventListener('click', createContact);

    async function loadContacts() {
        try {
            phonebookUl.replaceChildren();
            const response = await fetch(`${BASE_URL}`);
            const data = await response.json();
            Object.keys(data)
            .forEach((key) => {
                const li = document.createElement('li');
                li.textContent = `${data[key].person}: ${data[key].phone}`;
                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Delete';
                deleteBtn.id = data[key]._id;
                console.log(deleteBtn);
                deleteBtn.addEventListener('click', deleteContact);
                li.appendChild(deleteBtn);

                phonebookUl.appendChild(li);
            });


        } catch (error) {
            console.log(error);
        }
    }

    async function deleteContact() {
        try {
            const deleteId = this.id;
            const httpHeaders = {
                method: 'DELETE'
        };

        await fetch(`${BASE_URL}${deleteId}`, httpHeaders);
        loadContacts();
        } catch (error) {
            console.log(error);
        }
    }

    async function createContact() {
        try {
            const person = personInput.value;
            const phone = phoneInput.value;
            const httpHeaders = {
                method: 'POST',
                headers: { 'Content-type': 'application.json' },
                body: JSON.stringify({
                    'person': person,
                    'phone': phone
                })
        }

        await fetch(BASE_URL, httpHeaders);
        personInput.value = '';
        phoneInput.value = '';
        loadContacts();
        } catch (error) {
            console.log(error);
        }
    }
}

attachEvents();
