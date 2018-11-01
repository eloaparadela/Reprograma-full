import React from 'react'
import erro from './404.jpeg'
import './NaoEncontrada.css'


function NaoEncontrada(){
   return(
     <main className="nao-encontrada">
        <h1> Pagina não encontrada</h1>

        <p className = "nao-encontrada__simbolo">
          :( 
        </p>
       <img src={erro} alt="página não encontrada" />
     </main>

   )
}

export default NaoEncontrada