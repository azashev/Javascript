function attachEvents() {
  const tbody = document.querySelector('#results > tbody');
  const BASE_URL = 'http://localhost:3030/jsonstore/collections/students/';
  const submitBtn = document.getElementById('submit').addEventListener('click', addStudent);
  const newStudentInputs = Array.from(document.querySelectorAll('.inputs > input'));
  
  async function addStudent() {
    const firstName = newStudentInputs[0].value.trim();
    const lastName = newStudentInputs[1].value.trim();
    const facultyNumber = newStudentInputs[2].value.trim();
    const grade = newStudentInputs[3].value.trim();

    if (firstName && lastName && facultyNumber && grade) {
      try {
        const httpHeaders = {
          method: 'POST',
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify({
            'firstName': firstName,
            'lastName': lastName,
            'facultyNumber': facultyNumber,
            'grade': grade
          })
        };
        await fetch(BASE_URL, httpHeaders);
        newStudentInputs.forEach(input => input.value = '');
        listStudents();
      } catch (error) {
        alert(error);
      }
    } else {
      alert ('Invalid inputs!');
    }
  }

  async function listStudents() {
    try {
      tbody.replaceChildren();
      const response = await fetch(BASE_URL);
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      for (const studentId in data) {
        const student = data[studentId];
        const row = document.createElement('tr');

        row.innerHTML = `
          <td>${student.firstName}</td>
          <td>${student.lastName}</td>
          <td>${student.facultyNumber}</td>
          <td>${student.grade}</td>
        `;
        tbody.appendChild(row);
      }
      

    } catch (error) {
      alert(error);
    }
  }
  listStudents();
}

attachEvents();
