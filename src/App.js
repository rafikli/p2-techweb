import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import  Trending from './components/Trending';
import Nav from './components/Nav';
import Search from './components/Search';
import Movie from './components/Movie';

function App(){
  return(
    <Router>
      <div className='App'>
      <Nav />
      <Switch>
        <Route path='/' exact component={Trending}/>
        <Route path='/search' component={Search}/>
        <Route path='/trending' component={Trending}/>
        <Route path='/:id' component={Movie}/>
      </Switch>
      </div>
    </Router>
  );
}

export default App