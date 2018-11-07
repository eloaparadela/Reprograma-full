import React, { Component } from 'react'
import { connect } from 'react-redux'
import {logaUsuario} from '../../redux/action'
import Link from '../../componentes/Link/Link'
import Botao from '../../componentes/Botao/Botao'
import Legenda from '../../componentes/Legenda/Legenda'
import Campo from '../../componentes/Campo/Campo'
import './Login.css'


class Login extends Component {
    constructor (props){ //dados da conta 
        super(props)
        this.senhaRef =React.createRef()
        this.emailRef =React.createRef()
        this.state = { desabilitado:true}
      }

      enviaDados =(evento) => {
          evento.preventDefault()
        const campoEmail = this.emailRef.current
        const campoSenha = this.senhaRef.current
        
          const dados ={
              email: campoEmail.getValor(),
              senha: campoSenha.getValor()
          }
          this.props.logaUsuario(dados)

          this.props.history.push('/')
      }

      habilitaOuDesabilita = () =>{
        const campoEmail = this.emailRef.current
        const campoSenha = this.senhaRef.current

        if(campoEmail.temErro() || campoSenha.temErro()) {
            this.setState({desabilitado: true})
        } else {
            this.setState({desabilitado: false})
        }
      }

    render() {
        return (
            <main className="login">
                <h1> Login</h1>
                <p>Entre com seu login</p>



                <form onSubmit={this.enviaDados}>
                <Legenda htmlFor="email">Email:</Legenda>
                <Campo placeholder="Email" 
                 ref ={this.emailRef}
                name="email" id="email" 
                type="email" 
                required onChange={this.habilitaOuDesabilita}></Campo>

                <Legenda htmlFor="senha">Senha:</Legenda>
                <Campo placeholder="Senha"
                ref={this.senhaRef}
                name="senha" 
                id="senha" 
                type="password" 
                required minLength={6} onChange ={this.habilitaOuDesabilita}></Campo>


                {/* <Link url="/login"> Fazer login</Link> */}
                <Botao desabilitado={this.state.desabilitado}>Enviar</Botao>
                </form>
                {/* <Botao>Enviar</Botao>  */}
                <Link url="/conta"> Criar uma conta</Link>
            </main>
        )
    }
}

const LoginConectado = connect(
    null,
    {logaUsuario}
)(Login)

export default LoginConectado