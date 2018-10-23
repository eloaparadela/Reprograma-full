//<a class = "link"  href="/conta"></a>
function Link(props){
  return(
    <a className ="link" href ={props.url}>
    {props.children}
    </a>
  )
}

function Botao(props){
  return(
    <input className="botao" type="submit" value={props.children}/> 
   
  )
}

const paginaLogin = (
  <main className="pagina-login">
  <h1> Login</h1>
  <p>Entre com seu login</p>

  <Link url="/conta"> Criar uma conta</Link>
  <Botao>Enviar</Botao>
  </main>
)

const divisaoProjeto =document.getElementById('projeto')

// const linkCriarUmaConta = <a class='link' href='/conta'>Criar uma conta</a>
// // React.createElement('a', {className:'link', 
// // href:'/conta', 
// // children:'Criar uma conta'
// // })


// const fazerLogin= <a class='link' href='/login'>fazer login</a>
// // React.createElement('a',{className:'link',
// // href:'/login',
// // children:'Fazer login'
// // })



// const formularioLogin = (
//   <form>
//     {[linkCriarUmaConta, fazerLogin]}
//   </form>
// )

// const divisaoProjeto =document.getElementById('projeto')

 ReactDOM.render(paginaLogin, divisaoProjeto)





