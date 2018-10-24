//<a class = "link"  href="/conta"></a>
import React from 'react'
import ReactDOM from 'react-dom'
import Link from './componentes/Link/Link'
import Botao from './componentes/Botao/Botao'
import './index.css'


const paginaLogin = (
  <main className="pagina-login">
  <h1> Login</h1>
  <p>Entre com seu login</p>

  <Link url="/conta"> Criar uma conta</Link>
  <Link url="/login"> Fazer login</Link>
  <Botao desabilitado>Enviar</Botao>
  <Botao>Enviar</Botao>
  {/* <Botao className="botao-danger">Enviar</Botao> */}
  </main>
)

const divisaoProjeto =document.getElementById('projeto')

// const linkCriarUmaConta = <a class='link' href='/conta'>Criar uma conta</a>
// // React.createElement('a', {className:'link', 
// // href:'/conta', 
// // children:'Criar uma conta'
// // })


// const fazerLogin= <a class='link' href='/login'>fazer login</a>
// // React.createElement('a',{className:'link',
// // href:'/login',
// // children:'Fazer login'
// // })



// const formularioLogin = (
//   <form>
//     {[linkCriarUmaConta, fazerLogin]}
//   </form>
// )
//  const divisaoProjeto =document.getElementById('projeto')
 ReactDOM.render(paginaLogin, divisaoProjeto)





