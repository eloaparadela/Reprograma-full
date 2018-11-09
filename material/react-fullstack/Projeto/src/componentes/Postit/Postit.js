import React, {Component} from 'react'
import {cadastraPostit} from  '../../redux/action'
import {connect} from 'react-redux'
import './Postit.css'

class Postit extends Component{
    constructor(props){
        super(props)
    }
cadastraOuAlteraPostit =(evento) =>{
    evento.preventDefault()
   const form = evento.target
   const dados ={
       id:`cce281e7-15a9-4472-aa6a-592ee798a61c${Math.random(100)}`,
       titulo:form.titulo.value ,
       texto: form.texto.value
   }
   this.props.cadastraPostit(dados)
   form.reset()
}

    render(){
        const cadastrando =!this.props.id
        return(
            <form className="postit" onSubmit={this.cadastraOuAlteraPostit}>
               <input className="postit__titulo" 
               type="text"
               name="titulo" 
               placeholder="Titulo"
               autoComplete="off"
               defaultValue={this.props.titulo}
               />
               <textarea className="postit__texto"
               name="texto"
               placeholder="Digite um texto..."
               rows={5}
               autoComplete="off"
               defaultValue={this.props.texto}
               />
               <button className="postit__botao-concluir">Concluido</button>
            </form>
        )
    }
}


export default connect(
    null,{cadastraPostit}
)(Postit)