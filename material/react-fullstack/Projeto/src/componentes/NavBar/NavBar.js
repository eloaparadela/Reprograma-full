import React from 'react'
import Menu from '../Menu/Menu'
import './NavBar.css'
import logo from './logo.png'

function Navbar(props){
return(
<header className ="navbar">
 <a href="/">
 <img className="navbar__logo" src={logo} alt="Logo" />

 </a>
 <Menu usuario={props.usuario} deslogaUsuario={props.deslogaUsuario}/>
</header>
)

}

export default Navbar