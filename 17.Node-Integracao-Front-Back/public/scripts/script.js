document.addEventListener('DOMContentLoaded', () => {
  updatePosts();
})

function updatePosts() {
  fetch('http://localhost:3000/api/all')
    .then(res => {
      return res.json()
    }).then(posts => {
      let postElements = '';

      posts.forEach((post) => {
        postElements +=  `
          <div id=${post.id} class="card mb-4">
            <div class="card-header">
              <h5 class="title">${post.title}</h5>
            </div>
            <div class="card-body">
              <div class="card-text">${post.description}</div>
            </div>
          </div>
        `;
      });

      document.getElementById('posts').innerHTML = postElements;
    });
}

function newPost() {
  const post = {
    title: document.getElementById('title').value,
    description: document.getElementById('description').value
  };

  const options = {
    method: 'POST',
    headers: new Headers({
      'content-type': 'application/json'
    }),
    body: JSON.stringify(post)
  }

  fetch('http://localhost:3000/api/new', options)
    .then(res => {
      updatePosts();
      document.getElementById('title').value = '';
      document.getElementById('description').value = '';
    })
}