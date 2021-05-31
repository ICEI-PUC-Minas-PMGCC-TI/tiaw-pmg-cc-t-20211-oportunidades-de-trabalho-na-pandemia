const vaga1 = {
    'titulo_vaga' : 'Analista de Sistema'
}

localStorage.setItem ( 'vaga1', JSON.stringify (vaga1) );

const vaga1 = JSON.parse (localStorage.getItem('vaga1'));
document.getElementById ( 'teste' ).value = vaga1[0].titulo_vaga;