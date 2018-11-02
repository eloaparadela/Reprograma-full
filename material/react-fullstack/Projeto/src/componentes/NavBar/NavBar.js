import React from 'react'
import Menu from '../Menu/Menu'
import './NavBar.css'
import logo from './logo.png'
import {Link} from 'react-router-dom'
function Navbar(props){
return(
<header className ="navbar">
 <Link to="/">
 <img className="navbar__logo" src={logo} alt="Logo" />

 </Link>
 <Menu usuario={props.usuario} deslogaUsuario={props.deslogaUsuario}/>
</header>
)

}

export default Navbar