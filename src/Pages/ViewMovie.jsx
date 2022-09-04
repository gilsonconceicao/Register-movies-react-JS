import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
import {BsSearch} from 'react-icons/bs'; 
import {MdOutlineArrowBackIos} from 'react-icons/md'
import './ViewMovie.css'

const ViewMovie = () => {
  const { id } = useParams();
  const [moviesId, setMovieId] = useState({});

  const url = 'http://localhost:3000/movie/'+id
  useEffect(() => {
    fetch(url) 
    .then(response => response.json())
    .then(data => setMovieId(data))
  },[])
 

  console.log(moviesId)  
  
  return (
    <div className='detals_movie'>
      <img src={moviesId.image} alt="" />
      <div className='text_about'>
        <h2>{moviesId.name}</h2>
        <p>Detals: {moviesId.aboutMovie}</p>
        <p>Gênero: {moviesId.genere}</p>
        <p>Data de cadastro: {moviesId.dateRegister}</p>
        <span className='btn_movies'>
          <Link to='/allmovies'><MdOutlineArrowBackIos/>Voltar</Link>
          <a href={`https://www.google.com.br/search?q=${moviesId.name}`} target='_Blank'><BsSearch/> Buscar mais sobre o filme</a>
        </span>
      </div>
    </div>
  )
}

export default ViewMovie