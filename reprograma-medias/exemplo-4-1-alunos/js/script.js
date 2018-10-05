const aluno = document.querySelector("#primeiro-da-lista");




const tdPrimeiroNota = aluno.querySelector(".info-notaum");
const primeiraNota = tdPrimeiroNota.textContent;

const tdSegundaNota = aluno.querySelector(".info-notadois");
const segundaNota = tdSegundaNota.textContent;

const mediaFinal = aluno.querySelector("info-media");
const mediaCalculada = (parseFloat(primeiraNota) + parseFloat(segundaNota)) / 2;
mediaFinal.textContent = mediaCalculada;