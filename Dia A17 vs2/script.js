const API_URL = 'https://api.themoviedb.org/3/discover/movie?api_key=9a15beb71ae996842c9268192242e322&sort_by=popularity.desc';
const API_SEARCH = 'https://api.themoviedb.org/3/search/movie?api_key=9a15beb71ae996842c9268192242e322&query="';
const form = document.querySelector('.pesquisa');
const input = document.querySelector('.form');
const container = document.querySelector('.container');
const main = document.getElementById('main');

//Mostrar na página inicial filmes populares
filmes(API_URL);

//Pesquisando filme
form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (input.value !== '') {
        const pesquisar = `${API_SEARCH}${input.value}"`;
        container.innerHTML = ''
        filmes(pesquisar);        
        input.value = '';
    } else {
        window.location.reload();
    }
})

//Requisição para o server
async function filmes(url) {
    const res = await fetch(url);
    const data = await res.json(); //ainda sem entender essa estrutura
    var array = data.results; //por que "results"?

    mostrarFilmes(array);
    console.log(array)
}

//Colocando filmes em cards no DOM
function mostrarFilmes(data) {
    for (var i = 0; i < data.length; i++) {
        container.innerHTML += `<div class="film">
        <img src="https://image.tmdb.org/t/p/w500${data[i].backdrop_path}" alt="${data[i].original_title}">
        <h2>${data[i].original_title}</h2>
        <div class="nota"><h3 class="${cor()}">${data[i].vote_average}</h3></div>
        <div class="critica">
            <h2>${data[i].original_title}</h2>
            <p>${data[i].overview}</p>
        </div></div>`
    }

    function cor() {
        if(data[i].vote_average < 5) {
            return 'red'; 
        } else if (data[i].vote_average < 7) {
            return 'orange';
        } else {
            return 'green';
        }
    }
}