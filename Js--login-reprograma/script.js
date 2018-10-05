var botao = document.querySelector('#but');
var msg= document.querySelector('#msg');

botao.addEventListener('click', function(event){ 
  event.preventDefault();
  var usuario = document.getElementById('usuario').value;
  var senha = document.getElementById('senha').value;

  if (usuario == "adm" && senha == "adm1"){
    msg.textContent = "Sucesso :)";
    msg.setAttribute('class', 'pudim');
    msg.classList.add('pudim');
   /* botao.setAttribute('class','butt');
    botao.classList.add('butt');*/

  }
  else {
  document.getElementById('msg').textContent = "Deu erro :(";
  document.getElementById('msg').style.color = "red";
  document.getElementById('msg').style.fontWeight = "bolder";

}});

