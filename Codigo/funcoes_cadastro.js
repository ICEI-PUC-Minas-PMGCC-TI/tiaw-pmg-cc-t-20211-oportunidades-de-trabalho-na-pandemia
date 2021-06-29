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

let candidates = [];

const registerCandidate = (ev) => {
    ev.preventDefault ( );
    let candidate = {
        id: Date.now (),
        nome               : document.getElementById ( 'name'          ).value,
        data_de_nascimento: document.getElementById ( 'nascimento'    ).value,
        genero             : document.getElementById ( 'genero'        ).value,
        email              : document.getElementById ( 'email'         ).value,
        tel                : document.getElementById ( 'telefone'      ).value,
        cell               : document.getElementById ( 'celular'       ).value,
        formacao           : document.getElementById ( 'escolaridade'       ).value,
        area_atuacao       : document.getElementById ( 'atuacao'       ).value,
        sobre_mim          : document.getElementById ( 'descricao'     ).value,
    }
    candidates.push(candidate);
    document.forms[0].reset();

    console.warn ( 'Candidatos' , {candidates} );

    localStorage.setItem ( 'CandidatosRegistrados', JSON.stringify (candidates) );
}