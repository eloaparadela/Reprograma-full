import React from 'react'
import Link from '../../componentes/Link/Link'
import Botao from '../../componentes/Botao/Botao'
import Legenda from '../../componentes/Legenda/Legenda'
import Campo from '../../componentes/Campo/Campo'
import './Conta.css'

function Conta() {
return(
<main className="conta">
  <h1> Conta </h1>
  <p>Preencha o formulario</p>
  <Legenda htmlFor="nome">Nome</Legenda>
  <Campo placeholder="Nome" name= "nome" id="nome" type="text" required></Campo>

  <Legenda htmlFor="telefone">Telefone</Legenda>
  <Campo placeholder="(  ) Telefone" name="telefone" id="telefone" type="tel" required minLength={10}></Campo>

  <Legenda htmlFor="email">Email:</Legenda>
  <Campo placeholder="Email" name= "email" id="email" type="email" required
  pattern={/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/}
  
  ></Campo>

  <Legenda htmlFor="senha">Senha:</Legenda>
  <Campo placeholder="Senha" name="senha" id="senha" type="password" required minLength={6}></Campo>

  {/* <Link url="/conta"> Criar uma conta</Link> */}
  <Botao desabilitado>Enviar</Botao>
  {/* <Botao>Enviar</Botao> */}
  <Link url="/login"> Fazer login</Link>

</main>
)
}

export default Conta