// fetch('https://jsonplaceholder.typicode.com/posts').then((Response)=>{
//     return Response.json()
// }).then((data)=>{
//     console.log(data);
//     const containerPosts=document.querySelector('.container-posts')
//     for (let i = 0; i < data.length; i++) {
//         const bg_color=(Math.random() * 225).toFixed()
//         const bg_color2=(Math.random() * 255).toFixed()
//         const bg_color3=(Math.random() * 255).toFixed()

//         const rgb=`rgb(${bg_color}, ${bg_color2}, ${bg_color3})`
//         containerPosts.innerHTML+=
//         `<div class="card col-6 "data-bs-toggle="modal" data-bs-target="#exampleModal " style="background:${rgb};width: 18rem;">
//   <div class="card-body">
//     <h6 class="card-subtitle mb-2 text-body-secondary">${data[i].title}</h6>
//     <p class="card-text">${data[i].body}</p>
//     <a href="#" class="card-link">Card link</a>
//     <a href="#" class="card-link">Another link</a>
//   </div>
// </div>`
//     }
// })

// async function getPost() {
//     const response=await fetch('https://jsonplaceholder.typicode.com/posts')
//     console.log(response);
//     const data=await response.json()
//     console.log(data);
// }
// getPost()

// fetch('https://jsonplaceholder.typicode.com/users/1').then((Response)=>{
//     return Response.json()
// }).then((num)=>{
//     console.log(num);
//     const name=document.querySelector('.user_name')
// name.innerHTML+=`<p>${num.username}</p>`
// })

fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => {
        const containerPost = document.querySelector('.container-posts');

        data.forEach(post => {
            const bg_color = getRandomRgbColor();
            const card = createPostCard(post, bg_color);
            containerPost.appendChild(card);
        });
    })
    .catch((error) => console.error('Ошибка загрузки постов:', error));


function createPostCard(post, bgColor) {
    const card = document.createElement('div');
    card.classList.add('card', 'col-6');
    card.style.background = bgColor;
    card.dataset.bsToggle = 'modal';
    card.dataset.bsTarget = '#exampleModal';
    card.addEventListener('click', () => showModal(post.title, post.body));

    card.innerHTML = `
        <div class="card-body">      
            <h6 class="card-subtitle mb-2 text-body-secondary">${post.title}</h6>
            <p class="card-text" style="font-size:20px" margin-right:5px >${post.body}</p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link add-to-favorites" data-post-id="${post.id}">Добавить в избранные</a>
        </div>
    `;

    const addToFavoritesBtn = card.querySelector('.add-to-favorites');
    addToFavoritesBtn.addEventListener('click', (event) => {
        event.stopPropagation(); 
        const postId = addToFavoritesBtn.getAttribute('data-post-id');
        addToFavorites(post);
        moveToFavoritesPage(postId);
    });

    return card;
}


function addToFavorites(post) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites.push(post);
    localStorage.setItem('favorites', JSON.stringify(favorites));
}


function moveToFavoritesPage(postId) {
    localStorage.setItem('selectedPostId', postId);
    window.location.href = 'favorit.html';
}

function getRandomRgbColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}


function showModal(title, body) {

    console.log(`Заголовок: ${title}`);
    console.log(`Текст поста: ${body}`);
}
