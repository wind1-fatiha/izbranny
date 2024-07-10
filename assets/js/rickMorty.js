const url='https://rickandmortyapi.com/api/character'

async function getCharacters() {
    const res=await fetch(url)
    console.log(res);
    const data=await res.json()
    console.log(data);
    for (let i = 0; i < data.results.length; i++) {
        console.log( document.querySelector('.charakter_container'));
        document.querySelector('.charakter_container').innerHTML+=  `<div class='character_card'>
        <h1>${data.results[i].name}</h1>
        <img src='${data.results[i].image}'>
        </div>
        `
        
    }
}

getCharacters()