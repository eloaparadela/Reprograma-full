import React from 'react'
import './Campo.css'

// class Campo extends React.Component{
// constructor(props){
//  super(props)
//  this.state={
//      erro:''
//  }

// }

// valida = (evento) => {
// const alvo = evento.target

// if(this.props.obrigatorio &&  alvo.value.trim() === ''){
//     const state={
//         erro:'Campo obrigatório'
//     }

//  this.setState(state)
// }
// }

// render(){
//     return (
//         <div>
//         <input 
//         className= "caixa-texto" 
//         name={this.props.name} 
//         placeholder={this.props.placeholder} 
//         id={this.props.id} 
//         type={this.props.type}
//         onChange={this.valida}
//         />


//       <p className="grupo__erro">{this.state.erro} </p>
//       </div>
//       );
// }
// }


// export default Campo

// // class Paciente extends Pessoa{
// // constructor(nomeRecebido, sobrenomeRecebido, pesoRecebido, alturaRecebido){
// //     super(nomeRecebido, sobrenomeRecebido)
// //     this.peso= pesoRecebido
// //     this.altura= alturaRecebido
// // }
// // }
// // const Maria= new Paciente('Eloa', 'Paradela', 57 ,166)


// // class Animal{
// //     constructor(raçaRecebida, anosRecebida, foiVacinado){
// //        this.raca= raçaRecebida
// //        this.anos = anosRecebida
// //        this.Vacinado=foiVacinado
// //     }
// //     vacinar(){
// //         this.vacinado=true
// //     }
// // }
// // const jenny= new Animal('sdr', 2, false)
// // jenny.vacinar()



class Campo extends React.Component {
  constructor (props){ //dados da conta 
    super(props)
    this.state ={
      erro:''
    }
  }
  
  valida = evento =>{
    const alvo = evento.target


    if( this.props.required && alvo.value.trim()==='' ){
      this.setState({erro: 'Campo obrigatorio'})
    }
    else if(this.props.minLength && alvo.value.length < this.props.minLength ){
      this.setState({erro: `Digite pelo menos ${this.props.minLength} caracteres`})
    }
    else if(this.props.pattern && !this.props.pattern.test(alvo.value)){
      this.setState({erro: 'Email invalido'})
    }
    else{
      this.setState({erro:''})
    }

  //   if(alvo.type ==='tel' && alvo.value.trim() ===''){
  //     const state={
  //       erro:'Campo do telefone é obrigatorio'
  //   }
  //    this.setState(state)
  // }
    
  //   if(alvo.type ==='email' && alvo.value.trim() ===''){
  //     const state={
  //       erro:'Campo do email é obrigatorio'
  //     }
  //     this.setState(state)
      
  //   }

  //   if(this.props.obrigatorio &&  alvo.value.trim() === ''){
  //     const state={
  //       erro:'Campo do nome é obrigatorio'
  //     }
  //     this.setState(state)
  //   }
  }
  
  
  render(){
    return (
      <div>
      <input 
      id={this.props.id}
      className="caixa-texto"
      type={this.props.type}
      name={this.props.name}
      placeholder={this.props.placeholder}
      onChange={this.valida}
      />

      <p className="grupo__erro">{this.state.erro}</p>
      </div>
      )
    }
  }
  
  
  
  export default Campo