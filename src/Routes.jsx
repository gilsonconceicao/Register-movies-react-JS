import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//components
import NavBar from './Components/NavBar';

//pages
import Home from './Pages/Home';
import Register from './Pages/Register';
import AllMovies from './Pages/AllMovies';
import ViewMovie from './Pages/ViewMovie';
import PageError from './Pages/PageError';

const RoutesPage = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='allmovies' element={<AllMovies/>}/>
        <Route path='/movie/:id' element={<ViewMovie/>}/>
        <Route path='*' element={<PageError/>}/>
      </Routes>  
    </BrowserRouter>
  )
}

export default RoutesPage; 
