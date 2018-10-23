var botao = document.querySelector('#but');


botao.addEventListener('click', function(event){ 
  event.preventDefault();
  var usuario = document.getElementById('usuario').value;
  var senha = document.getElementById('senha').value;

  if (usuario == "adm" && senha == "adm1"){
    document.getElementById('msg').textContent = "Sucesso :)";
    document.getElementById('msg').style.color = "green";
    document.getElementById('msg').style.fontWeight = "bolder";
  }
  else {
  document.getElementById('msg').textContent = "Deu erro :(";
  document.getElementById('msg').style.color = "red";
  document.getElementById('msg').style.fontWeight = "bolder";
}});

