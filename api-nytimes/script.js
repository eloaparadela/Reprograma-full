const btnBusca = document.getElementById("btn-busca");
btnBusca.addEventListener("click", trazResultadoDaBusca);
let listaGifs = [];

function buscaArtigo() {
  return document.getElementById("campo-busca").value;
}

function erro() {
  console.log("erro");
}

function trazResultadoDaBusca(event) {
  event.preventDefault();
  const respostasDaBusca = new XMLHttpRequest();
  respostasDaBusca.open("GET", `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${buscaArtigo()}&api-key=c8eb5a34c1f4409e9cdd53bbd36516e8`)
  respostasDaBusca.onload = carregaPostsComGifs;
  respostasDaBusca.onerror = erro;
  respostasDaBusca.send();

}

function carregaPostsComGifs() {
  listaArtigos = JSON.parse(this.responseText)["response"]["docs"];
  exibePosts();


}

function exibePosts() {
  let exibeBusca = document.getElementById("exibe-busca");
  exibeBusca.innerHTML =
    `<div class="area-gif"> 
    <ul>
    ${listaArtigos.map(artigo => `
        <div class="artigo">
          <li>${artigo.headline.main}</li>
        </div>
        `).join("")}
        </ul>
      </div>`;
}



