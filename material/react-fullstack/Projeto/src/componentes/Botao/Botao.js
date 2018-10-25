import React from 'react'
import './Botao.css'

function Botao(props) {
  let classes = "botao"
  if (props.desabilitado === true) {
    classes += " botao--desabilitado"
  }
  return (<input className={classes} type="submit" value={props.children} />)
}

export default Botao