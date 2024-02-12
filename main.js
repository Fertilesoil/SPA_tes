
const home = document.querySelector('#home');
const cores = document.querySelector('#cores');


window.onpopstate = function (event) {
  loadPage(window.location.pathname);
};


async function loadPage(page) {
  await fetch(page)
    .then(response => response.text())
    .then(html => {
      document.getElementById('app').innerHTML = html;
    })
    .catch(error => console.error('Erro ao carregar a página:', error));
}


function navigateTo(page) {
  window.history.pushState(null, null, page);
  loadPage(page);
}

cores.onclick = () => {
  navigateTo('/src/views/cores.html')
  console.log('clicado');
}

home.onclick = () => {
  navigateTo('/src/views/home.html')
  console.log('clicado');
}


loadPage('./src/views/home.html');
