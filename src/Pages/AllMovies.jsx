import React, { useEffect, useState } from 'react';
import {BsSearch} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import './AllMovies.css';

const AllMovies = () => {
    //state
    const [movies, setMovie] = useState([]);
    const [search, setSearch] = useState(''); 
    const url = 'http://localhost:3000/movie'
    //request
    useEffect(() => {
        const GetDataApiLocal = async () => {
            const response = await fetch(url); 
            const dataResponse = await response.json(); 
            setMovie(dataResponse); 
        }
        GetDataApiLocal()
    }, [])
    console.log(movies); 

    const getMovieSearch = search.length > 0 ? 
      movies.filter(movie => movie.name.includes(search)) : []; 

    return (
        <div>
            <h1>AllMovies</h1>

            <label className='getMovies'>
              <input
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                placeholder='Search movie'
              />
              <BsSearch/>
            </label> 

              {search.length > 0 ? (
              <div className='container_all_movies'>
                {
                getMovieSearch.map((movie) => (
                  <div key={movie.id} className='movie_local'>
                    <img src={movie.image} alt={movie.name} />
                    <h3>{movie.name}</h3>
                    <p>{movie.aboutMovie}</p>
                    <Link to={`/movie/${movie.id}`}>Ver mais</Link>
                  </div>
                ))
              }
              </div>
            ) : (
            <div className='container_all_movies'>
              {
                movies.map((movie) => (
                  <div key={movie.id} className='movie_local'>
                    <img src={movie.image} alt={movie.name} />
                    <h3>{movie.name}</h3>
                    <p>{movie.aboutMovie}</p>
                    <Link to={`/movie/${movie.id}`}>Ver mais</Link>
                  </div>
                ))
              }
            </div>
            )}  
            </div>
    )
}

export default AllMovies