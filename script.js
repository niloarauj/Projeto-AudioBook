const totalCapitulos = 10;
const player = document.getElementById("play-pause");
const capitulo = document.getElementById("audio-capitulo");
const botaoProximo = document.getElementById("proximo");
const botaoAnterior = document.getElementById("anterior");
const tituloAtual = document.getElementById("capitulo")
let capituloAtual = 1;
let playerC = 0;


function tocarCapitulos(){
    capitulo.play();
    
}

function pausarCapitulos(){
    capitulo.pause();
}

function tocarOuPausar(){
    if(playerC === 0){
        tocarCapitulos();
        playerC = 1;
        player.classList.remove("bi-play-circle-fill");
        player.classList.add("bi-pause-circle-fill")

    }else{
        pausarCapitulos();
        playerC = 0;
        player.classList.remove("bi-pause-circle-fill");
        player.classList.add("bi-play-circle-fill")
    }
}
function trocarNomeCapitulo(){
    tituloAtual.innerText = "Capítulo " + capituloAtual
}

function passarCapitulo(){
    if(capituloAtual === totalCapitulos){
        capituloAtual = 1;
    } else{
        capituloAtual = capituloAtual + 1;

    }

    capitulo.src = "./books/dom-casmurro/" + capituloAtual + ".mp3";
    tocarCapitulos();
    playerC = 1;
    trocarNomeCapitulo();
}
function voltarCapitulo(){
    if(capituloAtual === 1){
        capituloAtual = totalCapitulos;
    } else{
        capituloAtual = capituloAtual - 1;

    }

    
    capitulo.src = "./books/dom-casmurro/" + capituloAtual + ".mp3";
    tocarCapitulos();
    playerC = 1;
    trocarNomeCapitulo();
}
player.addEventListener('click', tocarOuPausar)
botaoProximo.addEventListener('click', passarCapitulo)
botaoAnterior.addEventListener('click', voltarCapitulo)