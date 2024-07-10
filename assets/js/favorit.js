function loadFavoritePosts() {
    const favoritesContainer = document.getElementById('favorites-container');
    favoritesContainer.innerHTML = '';

    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites.forEach(post => {
        const favoritePost = createFavoritePostElement(post);
        favoritesContainer.appendChild(favoritePost);
    });
}

function createFavoritePostElement(post) {
    const favoritePost = document.createElement('div');
    favoritePost.classList.add('favorite-post');

    const bg_color = getRandomColor();
    const bg_color1 = getRandomColor();
    const bg_color2 = getRandomColor();
    favoritePost.style.backgroundColor = `rgb(${bg_color}, ${bg_color1}, ${bg_color2})`;

    favoritePost.innerHTML = `
        <h6>${post.title}</h6>
        <p>${post.body}</p>
        <button class="btn btn-danger delete-from-favorites" data-post-id="${post.id}">Удалить из избранного</button>
    `;

    const deleteBtn = favoritePost.querySelector('.delete-from-favorites');
    deleteBtn.addEventListener('click', () => {
        removeFromFavorites(post.id);
        favoritePost.remove();
    });

    return favoritePost;
}

function removeFromFavorites(postId) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites = favorites.filter(post => post.id !== postId);
    localStorage.setItem('favorites', JSON.stringify(favorites));
}


function getRandomColor() {
    return Math.floor(Math.random() * 256);
}

document.addEventListener('DOMContentLoaded', () => {
    loadFavoritePosts();

    const selectedPostId = localStorage.getItem('selectedPostId');
    if (selectedPostId) {
        const postToAdd = JSON.parse(localStorage.getItem('posts')).find(post => post.id === selectedPostId);
        if (postToAdd) {
            addToFavorites(postToAdd);
            localStorage.removeItem('selectedPostId');
        }
    }
});
