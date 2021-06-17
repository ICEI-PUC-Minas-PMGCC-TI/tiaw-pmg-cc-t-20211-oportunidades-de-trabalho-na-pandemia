//NavBar
function hideIconBar(){
    var iconBar = document.getElementById("iconBar");
    var navigation = document.getElementById("navigation");
    iconBar.setAttribute("style", "display:none;");
    navigation.classList.remove("hide");
}

function showIconBar(){
    var iconBar = document.getElementById("iconBar");
    var navigation = document.getElementById("navigation");
    iconBar.setAttribute("style", "display:block;");
    navigation.classList.add("hide");
}

//Comment
function showComment(){
    var commentArea = document.getElementById("comment-area");
    commentArea.classList.remove("hide");
}

//Reply
function showReply(){
    var replyArea = document.getElementById("reply-area");
    replyArea.classList.remove("hide");
}

let comentarios = [];

const registerComentarios = (ev) => {
    ev.preventDefault ( );
    let comentario = {
        id: Date.now (),
        comentario: document.getElementById ( 'comentario'           ).value,
        
    }
    comentarios.push(comentario);
    document.forms[0].reset();

    console.warn ( 'Comentarios' , {comentarios} );

    localStorage.setItem ( 'ComentariosRegistrados', JSON.stringify (comentarios) );
}