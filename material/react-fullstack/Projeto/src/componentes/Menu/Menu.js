import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Menu.css'


class Menu extends Component {
  constructor(props) {
    super(props)
    this.valor = ''
    this.state = { aberto: false }
  }

  abreOuFechaMenu = (evento) => {
    if (this.state.aberto) {
      this.setState({ àberto: false })
    } else {
      this.setState({ aberto: true })
    }
  }

  sair=() =>{
    this.abreOuFechaMenu()
    this.props.deslogaUsuario()
  }

  render() {
    let classesDoBotao = 'navbar-menu__botao'
    let classesDasOpcoes = 'navbar-menu__opcoes'

    if (this.state.aberto) {
      classesDoBotao += ' navbar-menu__botao--aberto'
      classesDasOpcoes += ' navbar-menu__opcoes--aberto'
    }

    return (
      <nav className="navbar-menu">
        <a className={classesDoBotao} onClick={this.abreOuFechaMenu}>Menu </a>

        <ul className={classesDasOpcoes}>
          <li>
            <NavLink to="/quem-somos" onClick={this.abreOuFechaMenu} activeClassName="navbar-menu__opcoes--ativo">
              Quem somos </NavLink>
          </li>

          <li>
            <NavLink to="/contato" onClick={this.abreOuFechaMenu} activeClassName="navbar-menu__opcoes--ativo">
              Contato</NavLink>
          </li>


          {this.props.usuario ? (
            <li>
              <NavLink to="/login" onClick={this.sair} activeClassName="navbar-menu__opcoes--ativo">
                Sair </NavLink>
            </li>
          ) : (

              <li>
                <NavLink to="/login" activeClassName="navbar-menu__opcoes--ativo" onClick={this.abreOuFechaMenu}>
                  Login
              </NavLink>
              </li>
            )}





        </ul>
      </nav>

    )
  }
}

export default Menu
