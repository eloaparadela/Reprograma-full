const button = document.querySelector(".transacao__button");

button.addEventListener("click", function(event){
    event.preventDefault();

   
    const linha = document.createElement("tr");


    const nome = document.querySelector("#transacaoInputName");
    const valor = document.querySelector("#transacaoInputMoney");
    const data = document.querySelector("#transacaoInputDate");

    const colunanome = document.createElement("td");
    const nometext= document.createTextNode(nome.value);
    colunanome.appendChild(nometext);

    const colunavalor = document.createElement("td");
    const nomevalor= document.createTextNode(valor.value);
    colunavalor.appendChild(nomevalor);

    const colunadata = document.createElement("td");
    const nomedata= document.createTextNode(data.value);
    colunadata.appendChild(nomedata);
    linha.appendChild(colunanome);
    linha.appendChild(colunavalor);
    linha.appendChild(colunadata);

    
    const tabela=document.querySelector(".extrato__table");
    tabela.appendChild(linha);
    
    document.querySelector('.extrato__header').style.backgroundColor = 'pink'; 
    document.querySelector('body').style.backgroundColor = '#FBFAFA'; 

    const tabelinha=document.querySelector(".extrato__header");
    const pagina=document.querySelector("body")



})