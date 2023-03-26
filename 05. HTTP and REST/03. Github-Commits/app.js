function loadCommits() {
    const username = document.getElementById('username').value;
    const repo = document.getElementById('repo').value;
    const ulCommits = document.getElementById('commits');
    const BASE_URL = 'https://api.github.com/repos/';
    ulCommits.textContent = '';

    fetch(`${BASE_URL}${username}/${repo}/commits`)
    .then((res) => {
        if (!res.ok) {
            throw new Error(`${res.status} (Not Found)`);
        }
        return res.json();
    })
    .then((data) => {
        for (const {commit} of data) {
            const li = document.createElement('li');
            li.textContent = (`${commit.author.name}: ${commit.message}`);
            ulCommits.appendChild(li);
        }       
    })
    .catch((err) => {
        const li = document.createElement('li');
        li.textContent = (`Error: ${err.message}`);
        ulCommits.appendChild(li);
    });
}
