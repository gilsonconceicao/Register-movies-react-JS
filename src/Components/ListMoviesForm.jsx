import React, { useState } from 'react';
import uuid from 'react-uuid';
import './ListMoviesForm.css';

const ListUsersForm = () => {
    //url
    const url = 'http://localhost:3000/movie'
    // get state form 
    const [name, setName] = useState('');
    const [genere, setGenre] = useState('');
    const [image, setImage] = useState('');
    const [aboutMovie, setAboutMovie] = useState('');
    //state movie
    const [movie, setMovie] = useState([])
    //state request
    const [error, setError] = useState('');

    const handleSubmitDataForm = async (e) => {
        e.preventDefault();
        
        if (name == '' || image == ''|| aboutMovie == '') {
            setError('Erro, por favor preencha os dados por completo.'); 
            return
        }
        const newMovie = {
            id: uuid(),
            dateRegister: new Date().toLocaleDateString('en-GB'),
            name,
            genere,
            image,
            aboutMovie
        }

        try {
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(newMovie),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                }
            })
            const addMoreMovies = await response.json();
            setMovie((data) => [...data, addMoreMovies]);
            setError('Enviado com sucesso!'); 
        } catch (error) {
            console.log(error)
            setError('Ocoreu um erro inesperado no sistema, tente novamente...')
        }

        setAboutMovie('');
        setImage('');
        setName('')

    }

    return (
        <div>
          
            <form onSubmit={handleSubmitDataForm} className='form_post_movie'>
                <h2>Cadastrar Filmes</h2>
                <label>
                    <span>Nome do filme</span>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        name="name"
                        autoComplete='off'
                        placeholder='Digite o nome do filme'
                    />
                </label>
                <span>Gênero do filme</span>
                <select name="genere" onChange={(e) => setGenre(e.target.value)}>
                    <option value="Genere">Genere</option>
                    <option value="Romance">Romance</option>
                    <option value="Drama">Drama</option>
                    <option value="Ação">Ação</option>
                    <option value="Aventura">Aventura</option>
                    <option value="Comédia romântica">Comédia romântica</option>
                    <option value="Ficção científica">Ficção científica</option>
                    <option value="Comédia" >Comédia</option>
                    <option value="Terror" >Terror</option>
                    <option value="Suspense" >Suspense</option>
                </select>
                <span>Imagem de capa</span>
                <input
                    type="text"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    placeholder='Insira o link da imagem'
                />
                <span>Sobre o filme</span>
                <textarea
                    name="aboutMovie"
                    value={aboutMovie}
                    onChange={(e) => setAboutMovie(e.target.value)}
                    placeholder='Sobre o filme'
                    cols="30"
                    rows="4"
                    maxLength={300}>
                </textarea>
                <input type="submit" value="Registrar filme" />

                {error && <p className={error == 'Enviado com sucesso!' ? "messageSucces" : "messageError"}>{error}</p>}
            </form>
        </div>
    )
}

export default ListUsersForm; 