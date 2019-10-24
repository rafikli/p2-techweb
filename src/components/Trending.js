import React, {useState, useEffect} from 'react';
import '../App.css';
import {Link} from 'react-router-dom'
const imgurl = 'https://image.tmdb.org/t/p/w500/'

function Trending() {


useEffect(() => {
  fetchMovies();
},[]);

const [movies,setMovies] =useState([]);

  const fetchMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=e38856e23f17467992d3ed681bef9ce0&language=en-US&page=1');
    
    const movies = await data.json()
    console.log(movies)
    setMovies(movies.results)
  };


  return (
    <div>
      
      {movies.map((movie) => (
        <center>
        <div class="card mb-3" style={{width: "50%"}}>
      <div class="row no-gutters">
        <div class="col-md-4">
        <img src={imgurl + movie.poster_path} class="card-img" alt={movie.title}/>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{movie.title}</h5>
            <p class="card-text">{movie.overview}</p>
            <p class="card-text"><small class="text">Nota TMDb: {movie.vote_average}/10</small></p>
            <p class="card-text">
              <small>
            <Link to={`/${movie.id}`}>
            ver mais sobre {movie.title}
            </Link>
            </small>
            </p>
          </div>
        </div>
      </div>
    </div>
    </center>
      ))}
    </div>
  )
};
export default Trending