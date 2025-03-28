const postsElement = document.querySelector('#posts');

const fetchPosts = async () => {
    try {
        const response = await fetch('http://localhost:3000/posts')
        const data = await response.json()

        postsElement.innerHTML = data.map((post) => `
            <div>
                <p class='posts'>
                    <span class='title'>${post.title}</span>
                    <span class='content'>${post.content}</span>
                    <span class='author'> Skrivet av: ${post.author}</span>
                </p>
            </div>`
        ).join('')
    } catch (error) {
        postsElement.innerHTML = 'Oops, något gick fel i hämtningen av sidans ihhehåll. Försök igen senare!'
        console.log(error)
    }
}

fetchPosts()