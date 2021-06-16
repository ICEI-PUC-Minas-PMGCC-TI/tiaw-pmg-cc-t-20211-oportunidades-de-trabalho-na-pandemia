$(document).ready(function(){
  $(".form-wrapper .button").click(function(){
    var button = $(this);
    var currentSection = button.parents(".section");
    var currentSectionIndex = currentSection.index();
    var headerSection = $('.steps li').eq(currentSectionIndex);
    currentSection.removeClass("is-active").next().addClass("is-active");
    headerSection.removeClass("is-active").next().addClass("is-active");

    $(".form-wrapper").submit(function(e) {
      e.preventDefault();
    });

    if(currentSectionIndex === 3){
      $(document).find(".form-wrapper .section").first().addClass("is-active");
      $(document).find(".steps li").first().addClass("is-active");
    }
  });
});

let vagas = [];

const registerVaga = (ev) => {
    ev.preventDefault ( );
    let vaga = {
        id: Date.now (),
        nome_vaga                         : document.getElementById ( 'name'                    ).value,
        nome_empresa                      : document.getElementById ( 'empresa'                 ).value,
        cidade_empresa                      : document.getElementById ( 'cidade'                 ).value,
        estado_empresa                      : document.getElementById ( 'estado'                 ).value,
        // vaga_perfil             : document.getElementById ( 'genero'        ).value,
        vaga_caracteristicas              : document.getElementById ( 'caracteristicas'         ).value,
        vaga_beneficios                   : document.getElementById ( 'beneficios'              ).value,
        vaga_requisitos                   : document.getElementById ( 'requisitos'              ).value,
        vaga_salario                      : document.getElementById ( 'salario'                 ).value,
        vaga_descricao                    : document.getElementById ( 'descricao'               ).value,
    }
    vagas.push(vaga);
    document.forms[0].reset();

    console.warn ( 'Vagas' , {vagas} );

    localStorage.setItem ( 'VagasRegistradas', JSON.stringify (vagas) );
}

