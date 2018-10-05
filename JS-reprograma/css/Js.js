var botao=document.getElementById('but');
var entrada = document.getElementById('usuario');
var senha = document.getElementById('senha');
botao.addEventListener('click', validar);


function validar(){
  event.preventDefault();
if(entrada.value === "" || senha.value.length < 6 ){
  alert('preencha os dados corretamente');
  document.body.style.backgroundColor = "red";
}
else {
  alert('obrigada');
  document.body.style.backgroundColor = "green";
}
}