//<a class = "link"  href="/conta"></a>
import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import QuemSomos from './paginas/QuemSomos/QuemSomos'
import Contato from './paginas/Contato/Contato'
import './index.css'
import Login  from './paginas/Login/Login';
import Conta from './paginas/Conta/Conta';

function App(){
    return(
        <div className="app">
     {/*HTML*/}

     <Switch>
     <Route path ="/" exact component={Login}/>
     <Route path ="/conta" component={Conta}/>
     <Route path ="/login" component={Login}/>
     <Route path ="/quem-somos" component={QuemSomos}/>
     <Route path ="/Contato" component={Contato}/>
     </Switch>
     </div>
    )
}


 ReactDOM.render(
      <BrowserRouter> 
      <App/> 
      </BrowserRouter>, 
      document.getElementById('projeto'));





