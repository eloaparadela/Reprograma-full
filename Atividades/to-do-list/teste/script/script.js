const button = document.querySelector(".transacao__button");

button.addEventListener('click', function(event){
  event.preventDefault();

  const tabela = document.querySelector(".extrato__table");
  const inputName = document.getElementById("transacaoInputName");
  const inputMoney = document.getElementById("transacaoInputMoney");
  const inputDate = document.getElementById("transacaoInputDate");

  const linha = document.createElement("tr");

  const colunaNome = document.createElement("td"); 
  const colunaNomeTexto = document.createTextNode(inputName.value);
  colunaNome.appendChild(colunaNomeTexto); 

  const colunaValor = document.createElement("td");
  const colunaValorTexto = document.createTextNode(inputMoney.value);
  colunaValor.appendChild(colunaValorTexto);

  const colunaData = document.createElement("td");
  const colunaDataTexto = document.createTextNode(inputDate.value);
  colunaData.appendChild(colunaDataTexto);

  linha.appendChild(colunaNome);
  linha.appendChild(colunaValor);
  linha.appendChild(colunaData);

  tabela.appendChild(linha);

  document.getElementById("transacaoInputName").value ="";
  document.getElementById("transacaoInputMoney").value = "";
  document.getElementById("transacaoInputDate").value = "";

})