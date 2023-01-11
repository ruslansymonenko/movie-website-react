import React from "react";
import {Movies} from '../components/Movies.jsx';
import {Preloader} from '../components/Preloader.jsx';
import { Search } from '../components/Search.jsx';

class Main extends React.Component {
  state = {
    movies: []
  }

  componentDidMount () {
    fetch('http://www.omdbapi.com/?apikey=c959a010&s=matrix', {method: 'GET'})
      .then(response => response.json())
      .then(data => this.setState({movies: data.Search}))
  }

  searchMovies = (str) => {
    fetch(`http://www.omdbapi.com/?apikey=c959a010&s=${str}`, {method: 'GET'})
    .then(response => response.json())
    .then(data => this.setState({movies: data.Search}))
  }


  render() {
    const {movies} = this.state

    return <main className="container content">
              <Search  searchMovies={this.searchMovies}/>
              {
                movies.length ? (
                  <Movies movies={this.state.movies}/>
                  ) : <Preloader/>
              }
            </main>
  }
}

export {Main}