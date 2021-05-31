let candidates = [];

const registerCandidate = (ev) => {
    ev.preventDefault ( );
    let candidate = {
        id: Date.now (),
        nome               : document.getElementById ( 'nome'          ).value,
        data_de_aniversario: document.getElementById ( 'nascimento'    ).value,
        genero             : document.getElementById ( 'genero'        ).value,
        email              : document.getElementById ( 'email'         ).value,
        tel                : document.getElementById ( 'telefone'      ).value,
        cell               : document.getElementById ( 'celular'       ).value,
        escolaridade1      : document.getElementById ( 'escolaridade1' ).value,
        escolardade2       : document.getElementById ( 'escolaridade2' ).value,
        escolaridade3      : document.getElementById ( 'escolaridade3' ).value,
        instituicao1       : document.getElementById ( 'instituicao1'  ).value,
        instituicao2       : document.getElementById ( 'instituicao2'  ).value,
        instituicao3       : document.getElementById ( 'instituicao3'  ).value,
        empresa1           : document.getElementById ( 'empresa1'      ).value,
        empresa2           : document.getElementById ( 'empresa2'      ).value,
        empresa3           : document.getElementById ( 'empresa3'      ).value,
        cargo1             : document.getElementById ( 'cargo1'        ).value,
        cargo2             : document.getElementById ( 'cargo2'        ).value,
        cargo3             : document.getElementById ( 'cargo3'        ).value,
        tempo1             : document.getElementById ( 'tempo1'        ).value,
        tempo2             : document.getElementById ( 'tempo2'        ).value,
        tempo3             : document.getElementById ( 'tempo3'        ).value,
        sobre_mim          : document.getElementById ( 'sobre_mim'     ).value,
        usuario            : document.getElementById ( 'file-ip-1'     ).value,
    }
    candidates.push(candidate);
    document.forms[0].reset();

    console.warn ( 'Candidatos' , {candidates} );

    localStorage.setItem ( 'MyCandidateList', JSON.stringify (candidates) );
}

function createCandidateAccount () {
    const candidates = JSON.parse (localStorage.getItem('MyCandidateList'));
    document.getElementById ( 'dados-usuario' ).innerHTML = `<b>${candidates.nome}</b>`;
    document.getElementById ( 'addF1' ).value = candidates.escolaridade1;
    document.getElementById ( 'addF1' ).value = candidates.escolaridade2;
    document.getElementById ( 'addF1' ).value = candidates.escolaridade3;
    document.getElementById ( 'addE1' ).value = candidates.empresa1;
    document.getElementById ( 'addE2' ).value = candidates.empresa2;
    document.getElementById ( 'sobre_mim' ).value = candidates.sobre_mim;
    document.getElementById ( 'user_img' ).value = candidates.usuario;
}

function showPreviewOne(event){
    if(event.target.files.length > 0){
        let src = URL.createObjectURL(event.target.files[0]);
        let preview = document.getElementById("file-ip-1-preview");
        preview.src = src;
        preview.style.display = "block";
    } 
}

function myImgRemoveFunctionOne() {
    document.getElementById("file-ip-1-preview").src = "https://i.ibb.co/ZVFsg37/default.png";
}