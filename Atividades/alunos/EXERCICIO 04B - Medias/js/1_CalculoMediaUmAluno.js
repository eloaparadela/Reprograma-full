// buscar o primeiro aluno
const aluno = document.querySelector("#primeiro-da-lista");
console.log(aluno);

// buscar o valor da primeira nota
const tdPrimeiraNota = aluno.querySelector(".info-notaum");
const primeiraNota = tdPrimeiraNota.textContent;
console.log(primeiraNota);

const tdSegundaNota = aluno.querySelector(".info-notadois");
const segundaNota = tdSegundaNota.textContent;
console.log(segundaNota);

const mediaFinal = aluno.querySelector(".info-media");

let notaEhValida = true;

if (primeiraNota < 0 || primeiraNota > 10) {
    notaEhValida = false;
    mediaFinal.textContent = "Nota Inválida";
}

if (notaEhValida) {
    const mediaCalculada =  (parseFloat(primeiraNota) + parseFloat(segundaNota)) / 2;
    mediaFinal.textContent = mediaCalculada;
}

