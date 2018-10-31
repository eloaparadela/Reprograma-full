import React, {Component} from 'react'
import Link from '../../componentes/Link/Link'
import Botao from '../../componentes/Botao/Botao'
import Legenda from '../../componentes/Legenda/Legenda'
import Campo from '../../componentes/Campo/Campo'
import './Conta.css'




class Conta extends Component{
  constructor (props){
    super(props)
        this.senhaRef =React.createRef()
        this.emailRef =React.createRef()
        this.telRef=React.createRef()
        this.nomeRef= React.createRef()
        this.state = { desabilitado:true}
  }

  habilitaOuDesabilita = () =>{
    const campoEmail = this.emailRef.current
    const campoSenha = this.senhaRef.current
    const campoNome = this.nomeRef.current
    const campoTel = this.telRef.current

    if(campoEmail.temErro() || campoSenha.temErro() || campoNome.temErro() || campoTel.temErro()) {
        this.setState({desabilitado: true})
    } else {
        this.setState({desabilitado: false})
    }
}
 render(){
  return(
    <main className="conta">
      <h1> Conta </h1>
      <p>Preencha o formulario</p>
      <Legenda htmlFor="nome">Nome</Legenda>
      <Campo placeholder="Nome" name= "nome" id="nome" type="text" required
      ref ={this.nomeRef}
      onChange ={this.habilitaOuDesabilita}
      ></Campo>
    
      <Legenda htmlFor="telefone">Telefone</Legenda>
      <Campo placeholder="(  ) Telefone" name="telefone" id="telefone" type="tel" required minLength={10}
      ref ={this.telRef}
      onChange ={this.habilitaOuDesabilita}
      ></Campo>
    
      <Legenda htmlFor="email">Email:</Legenda>
      <Campo placeholder="Email" name= "email" id="email" type="email" required
      pattern={/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/}
      ref ={this.emailRef}
      onChange ={this.habilitaOuDesabilita}
      ></Campo>
    
      <Legenda htmlFor="senha">Senha:</Legenda>
      <Campo placeholder="Senha" name="senha" id="senha" type="password" required minLength={6}
      ref ={this.senhaRef}
      onChange ={this.habilitaOuDesabilita}></Campo>
    
      {/* <Link url="/conta"> Criar uma conta</Link> */}
      <Botao desabilitado={this.state.desabilitado}>Enviar</Botao>
      {/* <Botao>Enviar</Botao> */}
      <Link url="/login"> Fazer login</Link>
    
    </main>
  )
 }
}

// function Conta() {
// 
// )
// }

export default Conta