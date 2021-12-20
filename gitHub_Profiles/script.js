const form = document.getElementById('form')
const main = document.getElementById('main')
const search = document.getElementById('search')
const APIURL = 'http://api.github.com/users/'

async function getUser(username) {
  try {
    const { data } = await axios.get(APIURL + username)
    createUserCard(data)
    getRepos(username)
  } catch (err) {
    if (err.response.status == 404) {
      createErrorCard('Usuário não encontrado!')
    }
  }
}

//getUser('mssdesign')
form.addEventListener('submit', (e) => {
  e.preventDefault()

  const user = search.value

  if (user) {
    getUser(user)
    search.value = ''
  }
})

function createUserCard(user) {
  const cardHTML = `<div class="card">
    <div>
      <img
        src="${user.avatar_url}"
        alt="${user.name}"
        class="avatar"
      />
    </div>

    <div class="user-info">
      <h2>${user.name}</h2>
      <p>${user.bio}</p>

      <ul>
        <li>${user.followers}<strong>Seguidores</strong></li>
        <li>${user.following}<strong>Seguindo</strong></li>
        <li>${user.public_repos}<strong>Repositórios</strong></li>
      </ul>

      <div id="repos"></div>
    </div>
  </div>`

  main.innerHTML = cardHTML
}

function addReposToCard(repos) {
  const reposEl = document.getElementById('repos')

  repos
  .slice(0, 5)
  .forEach((repo) => {
    const repoEl = document.createElement('a')
    repoEl.classList.add('repo')
    repoEl.href = repo.html_url
    repoEl.target = '_blank'
    repoEl.innerText = repo.name

    reposEl.appendChild(repoEl)
  })
}

async function getRepos(username) {
  try {
    const { data } = await axios.get(APIURL + username + '/repos')
    addReposToCard(data)
  } catch (err) {
    if (err.response.status == 404) {
      createErrorCard(
        'Problema ao carregar os repositórios. Tente novamente mais tarde!'
      )
    }
  }
}

function createErrorCard(message) {
  const errorCardHTML = `<div class="card">
    <div class="card">
        <h1>${message}</h1>
    </div>`

  main.innerHTML = errorCardHTML
}
