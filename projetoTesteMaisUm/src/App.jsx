import './App.css'
import { useState } from 'react'



function App() {

const [usuario, setUsuario] = useState("Topzera")





  let nome = "osvaldo"
  
  
  
 function lerNome(){
  let nome = prompt("Digite o nome:")
 } 
 function lerUsuario(){
  let resposta = prompt("Digite sua resposta lazarento")
 setUsuario(resposta)
}

 
 return (
    <>
   <h1>ESTADOS, ELES DISSERAM</h1>
   Nome: {nome}
   <div>
  Usuário: {usuario}
  </div>
<button onClick={lerNome}>TROCAR NOME</button><br />
<button onClick={lerUsuario}>TROCAR USUARIO</button>
   
   <ul>
<li>alguma coisa</li>
<li>alguma coisa</li>
<li>alguma coisa</li>
<li>alguma coisa</li>
<li>https://sc.olx.com.br/florianopolis-e-regiao/autos-e-pecas/carros-vans-e-utilitarios/chevette-1-6-1378925315?lis=listing_no_category</li>
<li>alguma coisa</li>
<li>alguma coisa</li>
<li>alguma coisa</li>
<li>alguma coisa</li>
<li>alguma coisa</li>
<li>alguma coisa</li>
<li>alguma coisa</li>
<li>alguma coisa</li>
<li>alguma coisa</li>
<li>alguma coisa</li>
<li>alguma coisa</li>
<li>alguma coisa</li>
<li>alguma coisa</li>
<li>alguma coisa</li>
<li>alguma coisa</li>
<li>alguma coisa</li>









   </ul>
   </>

  )
}

export default App
