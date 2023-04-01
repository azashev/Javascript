function attachEvents() {
    const posts = document.getElementById('posts');
    const btnLoadPosts = document.getElementById('btnLoadPosts');
    const btnViewPost = document.getElementById('btnViewPost');
    const postH1 = document.getElementById('post-title');
    const postBody = document.getElementById('post-body');
    const postComments = document.getElementById('post-comments');
    const BASE_URL = 'http://localhost:3030/jsonstore/blog/';

    let postsObj = {};
    btnLoadPosts.addEventListener('click', loadPosts);
    btnViewPost.addEventListener('click', view);

    async function loadPosts(e) {
        e.preventDefault();
        try {
            const response = await fetch(`${BASE_URL}posts`);
            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
            const data = await response.json();
            Object.keys(data).forEach((key) => {
                const title = data[key].title;
                const optionElement = document.createElement('option');
                optionElement.value = key;
                optionElement.text = data[key].title;
                posts.appendChild(optionElement);

                postsObj[title] = { postId: data[key].id, postContent: data[key].body };
                
            });
        } catch (error) {
            alert(error);
        }
    }

    async function view(e) {
        e.preventDefault();
        try {
            const selectedPost = posts.options[posts.selectedIndex];
            const currentPostId = postsObj[selectedPost.text].postId;
            postComments.textContent = '';

            postH1.textContent = selectedPost.text;
            postBody.textContent = postsObj[selectedPost.text].postContent;

            const response = await fetch(`${BASE_URL}comments`);
            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
            const data = await response.json();
            Object.values(data)
            .filter((x) => x.postId === currentPostId)
            .forEach((comment) => {
                const li = document.createElement('li');
                li.textContent = comment.text;
                postComments.appendChild(li);
            });
        } catch (error) {
            alert(error);
        }
    }
}

attachEvents();
