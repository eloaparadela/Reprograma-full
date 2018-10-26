import React from 'react'
import './Campo.css'

class Campo extends React.Component{
constructor(props){
 super(props)
 this.state={
     erro:''
 }
 
}

valida = (evento) => {
const alvo = evento.target

if(this.props.obrigatorio &&  alvo.value.trim() === ''){
    const state={
        erro:'Campo obrigatório'
    }

 this.setState(state)
}
}

render(){
    return (
        <div>
        <input 
        className= "caixa-texto" 
        name={this.props.name} 
        placeholder={this.props.placeholder} 
        id={this.props.id} 
        type={this.props.type}
        onChange={this.valida}
        />
      

      <p className="grupo__erro">{this.state.erro} </p>
      </div>
      );
}
}


export default Campo

// class Paciente extends Pessoa{
// constructor(nomeRecebido, sobrenomeRecebido, pesoRecebido, alturaRecebido){
//     super(nomeRecebido, sobrenomeRecebido)
//     this.peso= pesoRecebido
//     this.altura= alturaRecebido
// }
// }
// const Maria= new Paciente('Eloa', 'Paradela', 57 ,166)


// class Animal{
//     constructor(raçaRecebida, anosRecebida, foiVacinado){
//        this.raca= raçaRecebida
//        this.anos = anosRecebida
//        this.Vacinado=foiVacinado
//     }
//     vacinar(){
//         this.vacinado=true
//     }
// }
// const jenny= new Animal('sdr', 2, false)
// jenny.vacinar()