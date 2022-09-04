import React from 'react'
import { Link } from 'react-router-dom'

const PageError = () => {
  return (
    <div style={{textAlign: 'center'}}> 
        <h1>ERRO 404 DA PÁGINA</h1>
        <p>Por favor insira uma rota válida!</p>
        <Link to='/'>Voltar pra home</Link>
    </div>
  )
}

export default PageError