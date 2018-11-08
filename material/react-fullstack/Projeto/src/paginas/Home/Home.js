import React, {Component} from 'react'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
import carregando from './carregando.svg'
import './Home.css'


class Home extends Component {
  constructor (props){ 
      super(props)
      this.state = { carregando:true}
    }

    render(){
      if(!props.usuario){
        return <Redirect to="/login"/>
      }
      return(
        <main className ="home"> 
           {this.state.carregando ? (
              <img src ={carregando} alt="Carregando"/>
           ) : (
             <div> 
               Listar os postits
             </div>
           )}
        </main>
        )
        }
      }
      



  
    
   
   export default connect((state) =>(
    { usuario: state.usuario }))(Home)