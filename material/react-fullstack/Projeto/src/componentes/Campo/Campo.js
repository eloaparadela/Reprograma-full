import React from 'react'
import './Campo.css'

function Campo(props) {
    return (
        <input className="caixa-texto" name={props.name} placeholder={props.placeholder} id={props.id} type={props.type}>
        {props.children}
      </input>
      );
    
}

export default Campo