const adicionarAluno = document.querySelector("#adicionar-aluno");
adicionarAluno.addEventListener('click', function (event) {
    event.preventDefault();

    //PUXA O FORM
    const formularioAluno = document.querySelector("#form-adiciona");

    //const nomeAluno = formularioAluno.nome.value; //PEGA AO NOME DO ALUNO
    //const notaUmAluno = formularioAluno.notaum.value; //PEGA O VALOR DA NOTAUM
    //const notaDoisAluno = formularioAluno.notadois.value; //PEGA O VALOR DA NOTADOIS
    const aluno = obterDadosDoForm(formularioAluno);

    const alunoTr = document.createElement("tr"); //CRIA A NOVA LINHA

    //CRIA AS QUATRO COLUNAS
    const nomeAlunoTd = document.createElement("td");
    const notaUmAlunoTd = document.createElement("td");
    const notaDoisAlunoTd = document.createElement("td");
    const mediaAlunoTd = document.createElement("td");

    //CADA UMA DAS TRÊS PRIMEIRAS COLUNAS VAI RECEBER DADOS
    nomeAlunoTd.textContent = aluno.nomeAluno;
    notaUmAlunoTd.textContent = aluno.notaUmAluno;
    notaDoisAlunoTd.textContent = aluno.notaDoisAluno;
    mediaAlunoTd.textContent = aluno.media;
    //APPENDS
    alunoTr.appendChild(nomeAlunoTd);
    alunoTr.appendChild(notaUmAlunoTd);
    alunoTr.appendChild(notaDoisAlunoTd);
    alunoTr.appendChild(mediaAlunoTd);

    
    const tabela = document.querySelector("#tabela-alunos"); //PEGA A REF DA TABELA
    tabela.appendChild(alunoTr); //APPENDS
});

function obterDadosDoForm (formulario) {

    const objetoAluno = {
        nomeAluno: formulario.nome.value
        ,notaUmAluno: formulario.notaum.value
        ,notaDoisAluno: formulario.notadois.value
        ,media: calculaMedia(formulario.notaum.value, formulario.notadois.value)
    }

    return objetoAluno;

}