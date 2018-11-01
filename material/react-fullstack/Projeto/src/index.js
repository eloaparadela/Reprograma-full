//<a class = "link"  href="/conta"></a>
import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import QuemSomos from './paginas/QuemSomos/QuemSomos'
import Contato from './paginas/Contato/Contato'
import NaoEncontrada from './paginas/NaoEncontrada/NaoEncontrada'
import './index.css'
import Login  from './paginas/Login/Login';
import Conta from './paginas/Conta/Conta';
import Home from './paginas/Home/Home';

let usuario = null

function logaUsuario(dados){
  usuario = dados
}


function App(){
    return(
        <div className="app">
     {/*HTML*/}

     <Switch>
     <Route path ="/" exact render={() => {
         return usuario ? <Home/> : <Redirect to ="/login" />
     }}/>
     <Route path ="/conta" component={Conta}/>
     <Route path ="/login" render={(props) => {
         return <Login historico={props.history} onEnviar={logaUsuario}/>
     }}/>
     <Route path ="/quem-somos" component={QuemSomos}/>
     <Route path ="/Contato" component={Contato}/>
     <Route path ="/Home" component={Home}/>
     <Route  component={NaoEncontrada}/>
     </Switch>
     </div>
    )
}


 ReactDOM.render(
      <BrowserRouter> 
      <App/> 
      </BrowserRouter>, 
      document.getElementById('projeto'));





