//<a class = "link"  href="/conta"></a>
import React from 'react'
import {Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import QuemSomos from './paginas/QuemSomos/QuemSomos'
import Contato from './paginas/Contato/Contato'
import NaoEncontrada from './paginas/NaoEncontrada/NaoEncontrada'
import './index.css'
import store from './redux/store'
import Login from './paginas/Login/Login';
import Conta from './paginas/Conta/Conta';
import Home from './paginas/Home/Home';
import NavBar from './componentes/NavBar/NavBar'


// let usuario = JSON.parse(localStorage.getItem('usuario'))

// function logaUsuario(dados) {
//     const json = JSON.stringify(dados)
//     localStorage.setItem('usuario', json)
//     usuario = dados
// }

// function deslogaUsuario() {
//     localStorage.removeItem('usuario')
//     usuario = null
// }


function App() {
    // const usuario =props.usuario
    // const deslogaUsuario =props.deslogaUsuario
    // const logaUsuario= props.logaUsuario

    return (
        <div className="app">
            <NavBar />

            <Switch>
                <Route path="/" exact component={Home} />
                {/* render={() => {
                    return usuario ? <Home /> : <Redirect to="/login" />
                }} /> function (rendr) */}
                <Route path="/conta" component={Conta} />
                <Route path="/login" component={Login} />
                <Route path="/quem-somos" component={QuemSomos} />
                <Route path="/Contato" component={Contato} />
                <Route path="/Home" component={Home} />
                <Route component={NaoEncontrada} />
            </Switch>
        </div>
    )
}

// function passaDadosDoEstadoParaMeuComponente(state) {
//     const props = {
//         usuario: state.usuario
//     }
//     return props
// }


// function passaFuncoesQueDisparamAcoesViaProps(dispatch) {
//     const props ={
//        logaUsuario:( dados) => {
//            const acao = {
//                type: 'LOGA_USUARIO',
//                dados:dados
//            }

//            dispatch(acao)
//        },
//        deslogaUsuario: () => {
//            const acao = {
//               type: 'DESLOGA_USUARIO'
//            }
//            dispatch(acao)
//        }
//     }
//     return props
// }


// const conectaNaStore = connect(passaDadosDoEstadoParaMeuComponente, passaFuncoesQueDisparamAcoesViaProps)
// conectaNaStore(App)

// const AppConectada = withRouter (conectaNaStore(App))

ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
   </Provider>,
    document.getElementById('projeto'));





