const adicionarAluno = document.querySelector("#adicionar-aluno");

adicionarAluno.addEventListener('click', function(event) {
    event.preventDefault();

    const formularioAluno = document.querySelector("#form-adiciona");
    const novoAluno = obterDadosDoForm(formularioAluno);
    //console.log(novoAluno);
    const alunoTr = document.createElement("tr");
    const nomeAlunoTd = document.createElement("td");
    const notaUmAlunoTd = document.createElement("td");
    const notaDoisAlunoTd = document.createElement("td");
    const mediaAlunoTd = document.createElement("td");

    nomeAlunoTd.textContent = novoAluno.nomeAluno;
    notaUmAlunoTd.textContent = novoAluno.notaUmAluno;
    notaDoisAlunoTd.textContent = novoAluno.notaDoisAluno;
    mediaAlunoTd.textContent = novoAluno.media;

    alunoTr.appendChild(nomeAlunoTd);
    alunoTr.appendChild(notaUmAlunoTd);
    alunoTr.appendChild(notaDoisAlunoTd);
    alunoTr.appendChild(mediaAlunoTd);

    const tabela = document.querySelector("#tabela-alunos");
    tabela.appendChild(alunoTr);
});

function obterDadosDoForm(formulario) {
    const objetoAluno = {
        nomeAluno: formulario.nome.value
        ,notaUmAluno: formulario.notaum.value
        ,notaDoisAluno: formulario.notadois.value
        ,media: calculaMedia(formulario.notaum.value, formulario.notadois.value)
    }
    return objetoAluno;
}