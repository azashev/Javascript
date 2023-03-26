function loadRepos() {
	const username = document.getElementById('username').value;
	const repos = document.getElementById('repos');
	const BASE_URL = "https://api.github.com/users/";
	repos.textContent = '';

	fetch(`${BASE_URL}${username}/repos`)
	.then((res) => {
		return res.json();
	})
	.then((data) => {
		for (const repo of data) {
			const link = document.createElement('a');
			link.setAttribute('href', repo.html_url);
			link.textContent = repo.full_name;

			const listItem = document.createElement('li');
			listItem.appendChild(link);
			repos.appendChild(listItem);

		}
	})
	.catch((err) => {
		const listItem = document.createElement('li');
		listItem.textContent = err.message;
		repos.appendChild(listItem);
	});
}
