function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

function cadastrar_candidato () {
   location.href = "./cadastro_candidato.html"; 
}

function cadastrar_empresa () {
  location.href = "./cadastro_empresa.html"; 
}

const APPKEY = '9b3a1fe564258b04f7550bd64e464ea8';
const APPID  = '254908f7'

let baseURL = 'https://api.adzuna.com/v1/api/jobs';

function countWord(str = "", offset = 0, qtyWord = 10) {
  const words = str.split(" ");
  return words.slice(offset, qtyWord).join(" ");
}

function Pesquisa () {
  let keyword = document.getElementById('pesquisa-vagas').value;
  let url = ''.concat(baseURL, '/br/search/1?app_id=', APPID, '&app_key=', APPKEY, '&what=', keyword); 
  
  fetch(url)
  .then(result=>result.json())
  .then((data)=>{
      document.getElementById ('corpo').innerHTML = '';
      data.results.forEach ( vaga => {
          let card = 
          `<div class="box-resultado">
          <div class = "card">
            <h4 class="titulo">${vaga.title}</h4>
            <h5 class="local">${vaga.location.display_name}</h5>
            <span class="text">${countWord(vaga.description, 0, 50) }...<a href="${vaga.redirect_url}">Leia mais!</a></span>
            </div>
          </div>`;

      document.getElementById ( 'corpo').innerHTML += card;
      } )
      
  })
}

function Slide1 () {
  let url = ''.concat(baseURL, '/br/search/1?app_id=', APPID, '&app_key=', APPKEY);
  
  fetch(url)
  .then(result=>result.json())
  .then((data)=>{
      let vagas = data.results.slice(0,3);
      vagas.forEach ( vaga => {
          let card = `<div class = "col-lg-4" id="vaga">
          <div class="card p-3 mb-2">
              <div class="d-flex justify-content-between">
                  <div class="d-flex flex-row align-items-center">
                      <div class="icon"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Video-Game-Controller-Icon-IDV-green.svg/2048px-Video-Game-Controller-Icon-IDV-green.svg.png" > </div>
                      <div class="ms-2 empresa-detalhes">
                          <h6 class="mb-0">${vaga.company.display_name}</h6> <span> 1 dia atrás</span>
                      </div>
                  </div>
                  <div class="categoria"> <span>Tecnologia</span> </div>
              </div>
              <div class="mt-5">
                  <h3 class="heading">Estágio<br>${vaga.title}</h3>
                  <div class="mt-5">
                      <div class="mt-3"> <span class="text1">32 pessoas<span class="text2"> se candidataram</span></span> </div>
                  </div>
              </div>
          </div>
      </div>`;

      document.getElementById ( 'slides1').innerHTML += card;
      } )
      
  })
}

function Slide2 () {
  let url = ''.concat(baseURL, '/br/search/1?app_id=', APPID, '&app_key=', APPKEY);
  
  fetch(url)
  .then(result=>result.json())
  .then((data)=>{
      let vagas = data.results.slice(4,7);
      vagas.forEach ( vaga => {
          let card = `<div class = "col-lg-4" id="vaga">
          <div class="card p-3 mb-2">
              <div class="d-flex justify-content-between">
                  <div class="d-flex flex-row align-items-center">
                      <div class="icon"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Video-Game-Controller-Icon-IDV-green.svg/2048px-Video-Game-Controller-Icon-IDV-green.svg.png" > </div>
                      <div class="ms-2 empresa-detalhes">
                          <h6 class="mb-0">${vaga.company.display_name}</h6> <span> 1 dia atrás</span>
                      </div>
                  </div>
                  <div class="categoria"> <span>Tecnologia</span> </div>
              </div>
              <div class="mt-5">
                  <h3 class="heading">Estágio<br>${vaga.title}</h3>
                  <div class="mt-5">
                      <div class="mt-3"> <span class="text1">32 pessoas<span class="text2"> se candidataram</span></span> </div>
                  </div>
              </div>
          </div>
      </div>`;

      document.getElementById ( 'slides2').innerHTML += card;
      } )
      
  })
}

function Slide3 () {
  let url = ''.concat(baseURL, '/br/search/1?app_id=', APPID, '&app_key=', APPKEY);
  
  fetch(url)
  .then(result=>result.json())
  .then((data)=>{
      let vagas = data.results.slice(8,11);
      vagas.forEach ( vaga => {
          let card = `<div class = "col-lg-4" id="vaga">
          <div class="card p-3 mb-2">
              <div class="d-flex justify-content-between">
                  <div class="d-flex flex-row align-items-center">
                      <div class="icon"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Video-Game-Controller-Icon-IDV-green.svg/2048px-Video-Game-Controller-Icon-IDV-green.svg.png" > </div>
                      <div class="ms-2 empresa-detalhes">
                          <h6 class="mb-0">${vaga.company.display_name}</h6> <span> 1 dia atrás</span>
                      </div>
                  </div>
                  <div class="categoria"> <span>Tecnologia</span> </div>
              </div>
              <div class="mt-5">
                  <h3 class="heading">Estágio<br>${vaga.title}</h3>
                  <div class="mt-5">
                      <div class="mt-3"> <span class="text1">32 pessoas<span class="text2"> se candidataram</span></span> </div>
                  </div>
              </div>
          </div>
      </div>`;

      document.getElementById ( 'slides3').innerHTML += card;
      } )
      
  })
}

$("#pesquisa-vagas").keypress(function(event) {
  if (event.keyCode === 13) {
      $("#pesquisar").click();
  }
});

document.getElementById ('pesquisar').addEventListener ('click', Pesquisa);
document.addEventListener('DOMContentLoaded', Slide1);
document.addEventListener('DOMContentLoaded', Slide2);
document.addEventListener('DOMContentLoaded', Slide3);