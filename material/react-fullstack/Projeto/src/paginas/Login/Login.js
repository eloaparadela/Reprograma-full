import React from 'react'
import Link from '../../componentes/Link/Link'
import Botao from '../../componentes/Botao/Botao'
import Legenda from '../../componentes/Legenda/Legenda'
import Campo from '../../componentes/Campo/Campo'
import './Login.css'

function Login() {
return(
<main className="login">
  <h1> Login</h1>
  <p>Entre com seu login</p>
  <Legenda htmlFor="email">Email:</Legenda>
  <Campo placeholder="Email" name= "email" id="email" type="email"></Campo>

  <Legenda htmlFor="senha">Senha:</Legenda>
  <Campo placeholder="Senha" name="senha" id="senha" type="password"></Campo>

  
  {/* <Link url="/login"> Fazer login</Link> */}
  <Botao desabilitado>Enviar</Botao>
  {/* <Botao>Enviar</Botao> */}
  <Link url="/conta"> Criar uma conta</Link>
</main>
)
}

export default Login