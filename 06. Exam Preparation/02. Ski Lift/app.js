window.addEventListener("load", solve);

function solve() {
  const inputDomElements = {
    firstName: document.getElementById("first-name"),
    lastName: document.getElementById("last-name"),
    numberOfPeople: document.getElementById("people-count"),
    fromDate: document.getElementById("from-date"),
    numberOfDays: document.getElementById("days-count"),
  };

  const nextBtn = document.getElementById("next-btn");
  nextBtn.addEventListener("click", nextStepEventHandler);
  const ul = document.querySelector(".ticket-info-list");
  const ulConfirm = document.querySelector(".confirm-ticket");
  const mainDiv = document.getElementById('main');

  let ticket = {};

  function nextStepEventHandler(e) {
    e.preventDefault();

    const noEmptyFields = Object.values(inputDomElements)
    .every((inputField) => inputField.value !== '');
    if (!noEmptyFields) {
      return;
    }

    nextBtn.disabled = true;

    // Create elements for Ticket Preview
    const li = document.createElement('li');
    li.className = 'ticket';
    const article = document.createElement('article');

    const h3 = document.createElement('h3');
    h3.textContent = `Name: ${inputDomElements.firstName.value} ${inputDomElements.lastName.value}`;

    const dateParagraph = document.createElement('p');
    dateParagraph.textContent = `From date: ${inputDomElements.fromDate.value}`;

    const daysParagraph = document.createElement('p');
    daysParagraph.textContent = `For ${inputDomElements.numberOfDays.value} days`;

    const peopleCountParagraph = document.createElement('p');
    peopleCountParagraph.textContent = `For ${inputDomElements.numberOfPeople.value} people`;

    const editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", editTicketEventHandler);

    const continueBtn = document.createElement("button");
    continueBtn.className = 'continue-btn';
    continueBtn.textContent = "Continue";
    continueBtn.addEventListener("click", confirmTicketEventHandler);

    article.appendChild(h3);
    article.appendChild(dateParagraph);
    article.appendChild(daysParagraph);
    article.appendChild(peopleCountParagraph);

    li.appendChild(article);
    li.appendChild(editBtn);
    li.appendChild(continueBtn);

    ul.appendChild(li);

    ticket = {
      firstName: inputDomElements.firstName.value,
      lastName: inputDomElements.lastName.value,
      numberOfPeople: inputDomElements.numberOfPeople.value,
      fromDate: inputDomElements.fromDate.value,
      numberOfDays: inputDomElements.numberOfDays.value,
    };

    Object.values(inputDomElements).forEach((input) => (input.value = ''));
  }

  function editTicketEventHandler() {
    inputDomElements.firstName.value = ticket.firstName;
    inputDomElements.lastName.value = ticket.lastName;
    inputDomElements.numberOfPeople.value = ticket.numberOfPeople;
    inputDomElements.fromDate.value = ticket.fromDate;
    inputDomElements.numberOfDays.value = ticket.numberOfDays;

    this.parentElement.remove();
    nextBtn.disabled = false;
  }

  function confirmTicketEventHandler() {
    const confirmedTicket = document.querySelector('.ticket');
    confirmedTicket.className = 'ticket-content';
    ulConfirm.appendChild(confirmedTicket);

    const editBtn = ulConfirm.querySelector('.edit-btn');
    editBtn.remove();

    const continueBtn = ulConfirm.querySelector('.continue-btn');
    continueBtn.remove();

    const confirmBtn = document.createElement('button');
    confirmBtn.className = 'confirm-btn';
    confirmBtn.textContent = 'Confirm';
    confirmBtn.addEventListener('click', confirmTicket);

    const cancelBtn = document.createElement('button');
    cancelBtn.className = 'cancel-btn';
    cancelBtn.textContent = 'Cancel';
    cancelBtn.addEventListener('click', cancelTicketEventHander);

    ulConfirm.appendChild(confirmBtn);
    ulConfirm.appendChild(cancelBtn);
  }

  function confirmTicket() {
    mainDiv.remove();
    const body = document.getElementById('body');

    const h1 = document.createElement('h1');
    h1.textContent = 'Thank you, have a nice day!';
    h1.id = 'thank-you';

    const backBtn = document.createElement('button');
    backBtn.textContent = 'Back';
    backBtn.id = 'back-btn';
    backBtn.addEventListener("click", () => {
        location.reload();
      });

    body.appendChild(h1);
    body.appendChild(backBtn);
  }

  function cancelTicketEventHander() {
    const ticketContent = ulConfirm.querySelector('.ticket-content');
    const confirmBtn = ulConfirm.querySelector('.confirm-btn');
    const cancelBtn = ulConfirm.querySelector('.cancel-btn');
    
    ticketContent.remove();
    confirmBtn.remove();
    cancelBtn.remove();
    nextBtn.disabled = false;
  }
}
