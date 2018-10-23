//<a class = "link"  href="/conta"></a>


// const linkCriarUmaConta= document.createElement('a');
// linkCriarUmaConta.className = 'link'
// linkCriarUmaConta.href = "/conta"
// linkCriarUmaConta.appendChild(document.createTextNode('Criar uma conta'))

const linkCriarUmaConta = React.createElement('a', {className:'link', 
href:'/conta', 
children:'Criar uma conta'
})

// const fazerLogin= document.createElement('a');
// fazerLogin.className = 'link'
// fazerLogin.href = "/login"
// fazerLogin.appendChild(document.createTextNode('Fazer login'))
const fazerLogin= React.createElement('a',{className:'link',
href:'/login',
children:'Fazer login'
})

// const formulario =document.createElement('form')
// formulario.appendChild(linkCriarUmaConta)
// formulario.appendChild(fazerLogin) 

const formularioLogin = React.createElement('form',{
  children:[linkCriarUmaConta,fazerLogin]
})
// const divisaoProjeto = document.getElementById('projeto')
// divisaoProjeto.appendChild(formulario)

const divisaoProjeto =document.getElementById('projeto')

ReactDOM.render(formularioLogin, divisaoProjeto)





