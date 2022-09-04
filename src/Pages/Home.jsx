import React from 'react';
import { Link } from 'react-router-dom';
//components
import './Home.css'
const Home = () => {
  return (
    <div>
      <h1>Home Filmes </h1>
      <div className='container'>
        <div>
          <h2>Tudo em um só lugar. </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia temporibus quam officia facere deleniti. Quia consequuntur sit quam.</p>
        </div>
        <div>
          <h2>Armazenados pra você </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia temporibus quam officia facere deleniti. Quia consequuntur sit quam.</p>
        </div>
        <div>
          <h2>Crie seu próprio armezanamento de filmes.</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia temporibus quam officia facere deleniti. Quia consequuntur sit quam.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia temporibus quam officia facere deleniti. Quia consequuntur sit quam.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia temporibus quam officia facere deleniti. Quia consequuntur sit quam.</p>
        </div>
        <div>
          <h2>React JS</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, dicta porro. </p>
          <Link to='/register'>Cadastrar filme</Link>
        </div>
        <div>
          <h2>Reuquest Local</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
          <Link to='/allmovies'>Ver todos os filmes</Link>
        </div>
      </div>
    </div>
  )
}

export default Home