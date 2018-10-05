const TodosOsAlunos = document.querySelectorAll(".aluno");

for (let i = 0; i < TodosOsAlunos.length; i++) {
  const aluno = TodosOsAlunos[i];
  const tdPrimeiroNota = aluno.querySelector(".info-notaum");
  const primeiraNota = tdPrimeiroNota.textContent;

  const tdSegundaNota = aluno.querySelector(".info-notadois");
  const segundaNota = tdSegundaNota.textContent;

  const mediaFinal = aluno.querySelector(".info-media");
  const mediaCalculada = (parseFloat(primeiraNota) + parseFloat(segundaNota)) / 2;
  mediaFinal.textContent = mediaCalculada.toFixed(2);


  if (mediaCalculada < 5) {
   // aluno.style.backgroundColor = 'pink'; 
  aluno.setAttribute('class', 'tabela');
    aluno.classList.add('tabela');
  }
  
}

