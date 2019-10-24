import React, {useState, useEffect} from 'react';
import '../App.css';
import {Link} from 'react-router-dom'

const imgurl = 'https://image.tmdb.org/t/p/w500/'

// const query = `https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=${query}`

function Search (){
    
    const [movie,setMovie] = useState({});

    const [search,setSearch] = useState("");

    const [query,setQuery] = useState("Avatar");

    useEffect( () =>{
        getMovies()
    },[query]);

    const getMovies = async () => {
        const fetchMovie = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=e38856e23f17467992d3ed681bef9ce0&query=${query}`);
        const movie = await fetchMovie.json();
        console.log(movie)
        setMovie(movie.results[0])
    }

    const updateSearch = e => {
        setSearch(e.target.value)
        console.log(search)
    }

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
    }

    return(
        <center>        
            <form onSubmit={getSearch}>
            <div class="form-group" style={{width:"50%",borderTop:"10%"}} >
                <label for="exampleInputEmail1">Digite um filme:</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Digite aqui" value={search} onChange={updateSearch} />
                <small id="emailHelp" class="form-text text-muted">Pesquisa na base TMDB</small>
            </div>
            <button type="submit" class="btn btn-primary" >Pesquisar</button>
            </form>
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
             <p class="card-text">{movie.overview}</p>
             <p class="card-text"><small class="text">Nota TMDb: {movie.vote_average}/10</small></p>
             <p class="card-text"><small class="text">Data de lançamento: {movie.release_date}</small></p>
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

    )
}


export default Search

