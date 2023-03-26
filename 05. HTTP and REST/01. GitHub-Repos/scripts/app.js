function loadRepos() {
   const BASE_URL = 'https://api.github.com/users/testnakov/repos';
   const divElement = document.getElementById('res');

   fetch(BASE_URL, {method: 'GET'})
   .then((res) => res.text())
   .then((data) => {
      divElement.textContent = data;
   })
   .catch((err) => {
      console.log(err);
   })
}
