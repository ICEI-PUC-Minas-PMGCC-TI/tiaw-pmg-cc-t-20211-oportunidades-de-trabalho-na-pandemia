var currentTab = 0;
document.addEventListener("DOMContentLoaded", function(event) {
  showTab(currentTab);
});

function showTab(n) {
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } 
  else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = '<i class="fa fa-angle-double-right"></i>';
  } 
  else {
    document.getElementById("nextBtn").innerHTML = '<i class="fa fa-angle-double-right"></i>';
  }
  fixStepIndicator(n)
}

function nextPrev(n) {
  var x = document.getElementsByClassName("tab");
  if (n == 1 && !validateForm()) 
    return false;
  x[currentTab].style.display = "none";
  currentTab = currentTab + n;
  if (currentTab >= x.length) {
    document.getElementById("nextprevious").style.display = "none";
    document.getElementById("all-steps").style.display = "none";
    document.getElementById("register").style.display = "none";
    document.getElementById("text-message").style.display = "block";
  }
  showTab(currentTab);
}

function validateForm() {
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  for (i = 0; i < y.length; i++) { 
    if (y[i].value=="" ) { 
      y[i].className +=" invalid" ; valid=false; 
    }
  } 
  if (valid) { 
    document.getElementsByClassName("step")[currentTab].className +=" finish" ; 
  } 
  return valid; 
} 

function fixStepIndicator(n) { 
  var i, x=document.getElementsByClassName("step"); 
  for (i=0; i < x.length; i++) { 
    x[i].className=x[i].className.replace(" active", "" ); 
  } 
  x[n].className +=" active" ; 
}

let vagas = [];

const registerVaga = (ev) => {
    ev.preventDefault ( );
    let vaga = {
        id: Date.now (),
        nome_vaga                         : document.getElementById ( 'name'           ).value,
        nome_empresa                      : document.getElementById ( 'empresa'        ).value,
        cidade_empresa                    : document.getElementById ( 'cidade'         ).value,
        estado_empresa                    : document.getElementById ( 'estado'         ).value,
        vaga_caracteristicas              : document.getElementById ( 'caracteristicas').value,
        vaga_beneficios                   : document.getElementById ( 'beneficios'     ).value,
        vaga_requisitos                   : document.getElementById ( 'requisitos'     ).value,
        vaga_salario                      : document.getElementById ( 'salario'        ).value,
        vaga_descricao                    : document.getElementById ( 'descricao'      ).value,
    }
    vagas.push(vaga);
    document.forms[0].reset();

    console.warn ( 'Vagas' , {vagas} );

    localStorage.setItem ( 'VagasRegistradas', JSON.stringify (vagas) );
}

