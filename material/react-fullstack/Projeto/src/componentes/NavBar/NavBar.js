import React from 'react'
import { connect } from 'react-redux'
import { deslogaUsuario } from '../../redux/action'
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



// function passaNoPropsDesparadoresDeAcao(dispatch) {
//     return {
//         deslogaUsuario: () => {
//             const acao = {
//                 type: 'DESLOGA_USUARIO'
//             }
//             dispatch(acao)
//         }
//     }
// }



export default withRouter(connect(
    (state) => ({ usuario: state.usuario }),
    { deslogaUsuario }
)(Navbar))