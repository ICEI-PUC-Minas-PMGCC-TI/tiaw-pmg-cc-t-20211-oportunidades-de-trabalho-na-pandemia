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
            <h4 class="titulo">${vaga.title}</h4>
            <span class="text">${countWord(vaga.description, 0, 50) }...</span>
          </div>`;

      document.getElementById ( 'corpo').innerHTML += card;
      } )
      
  })
}

$("#pesquisa-vagas").keypress(function(event) {
  if (event.keyCode === 13) {
      $("#pesquisar").click();
  }
});

document.getElementById ('pesquisar').addEventListener ('click', Pesquisa);