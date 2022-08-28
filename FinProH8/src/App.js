import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState(' '); 

  const getMovieRequest = async (searchValue) => {    
     if (searchValue === " ") {
      searchValue = "spider";
    }
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=2d492c9e`;

    const response = await fetch(url);
    const respponseJson = await response.json();

    if (respponseJson.Search){
      setMovies(respponseJson.Search);
    }
  };
  
  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);
  
  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
         <MovieListHeading heading="FinProH8"/>
         <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
      <div className="row">
        <MovieList movies={movies} />
      </div>
    </div>
  );
}; 

export default App;
