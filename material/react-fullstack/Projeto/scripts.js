//<a class = "link"  href="/conta"></a>


const linkCriarUmaConta= document.createElement('a');
linkCriarUmaConta.className = 'link'
linkCriarUmaConta.href = "/conta"
linkCriarUmaConta.appendChild(document.createTextNode('Criar uma conta'))

const fazerLogin= document.createElement('a');
fazerLogin.className = 'link'
fazerLogin.href = "/login"
fazerLogin.appendChild(document.createTextNode('Fazer login'))

const formulario =document.createElement('form')
formulario.appendChild(linkCriarUmaConta)
formulario.appendChild(fazerLogin) 

const divisaoProjeto = document.getElementById('projeto')
divisaoProjeto.appendChild(formulario)





