/* ==============
FEITO EM 03/10
============== */

// buscando todos os alunos
const todosOsAlunos = document.querySelectorAll(".aluno");

for (let i = 0; i < todosOsAlunos.length; i++) {
    const aluno = todosOsAlunos[i];

    const tdPrimeiraNota = aluno.querySelector(".info-notaum");
    const primeiraNota = tdPrimeiraNota.textContent;

    const tdSegundaNota = aluno.querySelector(".info-notadois");
    const segundaNota = tdSegundaNota.textContent;

    const mediaFinal = aluno.querySelector(".info-media");

    let notaEhValida = true;

    if (primeiraNota < 0 || primeiraNota > 10) {
        notaEhValida = false;
        mediaFinal.textContent = "Nota Inválida";
    }

    if (notaEhValida) {
        //PUXA A FUNÇÃO *CALCULAMEDIA*, CRIADA POSTERIORMENTE
        const mediaCalculada = calculaMedia(primeiraNota, segundaNota);

        if (mediaCalculada < 5) {
            // aluno.style.backgroundColor = "red"; //aplica o estilo direto
            aluno.classList.add("abaixo-da-media"); //adiciona uma classe CSS
        }

        mediaFinal.textContent = mediaCalculada.toFixed(2);
    }
}

/* ======================================
FEITO EM 04/10, APÓS COMEÇAR O SCRIPT3.JS
====================================== */

//CRIA UMA FUNÇÃO PARA CALCULAR A MÉDIA
function calculaMedia(notaUmRecebida, notaDoisRecebida) {
    let mediaCalculadaNaFuncao = 0;
    mediaCalculadaNaFuncao = (parseFloat(notaUmRecebida) + parseFloat(notaDoisRecebida)) / 2;
    return mediaCalculadaNaFuncao;
}