import React, {useState, useEffect} from 'react';
import '../App.css';
import {Link} from 'react-router-dom'

const imgurl = 'https://image.tmdb.org/t/p/w500/'
const imdburl = 'https://www.imdb.com/title/'
const tmdburl = "https://www.themoviedb.org/movie/"
function Movie({match}) {

useEffect(() => {
  fetchMovie();
},[]);

const [movie,setMovie] =useState({});

  const fetchMovie = async () => {
      const fetchMovie = await fetch(`https://api.themoviedb.org/3/movie/${match.params.id}?api_key=e38856e23f17467992d3ed681bef9ce0&language=en-US`);
      const movie = await fetchMovie.json();
      console.log(movie)
      setMovie(movie)
  };

  return (
    <div>
        <center>
        <div class="card bg-light mb-3" style={{width: "75%"}}>
      <div class="row no-gutters">
        <div class="col-md-4">
        <img src={imgurl + movie.poster_path} class="card-img" alt={movie.title}/>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">
            {movie.title}
            </h5>
            <p class="card-text">"{movie.tagline}"</p>

            <p class="card-text">{movie.overview}</p>
            <p class="card-text"><small class="text">Nota TMDb: {movie.vote_average}/10</small></p>
            <p class="card-text"><small class="text">Orçamento (U$$): {movie.budget}</small></p>

            <p class="card-text"><small class="text">Receita total (U$$): {movie.revenue}</small></p>
            <small>
            <a class="card-text" href={tmdburl + movie.id}>
            Pagina TMDB de {movie.title}
            </a>
            </small>
            <p>
            <small>
            <a class="card-text" href={imdburl + movie.imdb_id}>
            Pagina IMDB de {movie.title}
            </a>
            </small>
            </p>
          </div>
        </div>
      </div>
    </div>
    </center>
    </div>
  )
};
 
export default Movie