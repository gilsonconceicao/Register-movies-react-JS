import React from 'react'
import { NavLink } from 'react-router-dom'; 
import {AiFillPlayCircle} from 'react-icons/ai'; 
import './NavBar.css'
const NavBar = () => {
  return (
    <nav>
      <div className='logo'><AiFillPlayCircle/></div>
      <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/register'>Cadastrar filme</NavLink></li>
        <li><NavLink to='/allmovies'>Filmes cadastrados</NavLink></li>
      </ul>
    </nav>
  )
}

export default NavBar