import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom'
function Nav(){ 
    return(  
        <nav className="nav nav-fill border">
            <h1> 
                Moviefy
            </h1>
        <Link to='/trending'>
            <li className="nav-item">Top Filmes</li>
        </Link>
        <Link to='/search'>
            <li className="nav-item"> Buscar Filme</li>
        </Link>
    
        </nav >
)}  

export default Nav