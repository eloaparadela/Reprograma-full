import React from 'react'
import { connect } from 'react-redux'
import Menu from '../Menu/Menu'
import './NavBar.css'
import logo from './logo.png'
import { Link, withRouter } from 'react-router-dom'

function Navbar(props) {
    return (
        <header className="navbar">
            <Link to="/">
                <img className="navbar__logo" src={logo} alt="Logo" />
                 
            </Link>
            <Menu usuario={props.usuario} deslogaUsuario={props.deslogaUsuario} />
        </header>
    )

}

function pegaDadosDoEstado(state) {
    return {
        usuario: state.usuario
    }
}

function passaNoPropsDesparadoresDeAcao(dispatch) {
    return {
        deslogaUsuario: () => {
            const acao = {
                type: 'DESLOGA_USUARIO'
            }
            dispatch(acao)
        }
    }
}

const conectaNaStore = connect(
    pegaDadosDoEstado,
    passaNoPropsDesparadoresDeAcao
)

const NavBarConectado = conectaNaStore(Navbar)

export default withRouter(NavBarConectado)