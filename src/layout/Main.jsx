import React from "react";
import {Movies} from '../components/Movies.jsx';
import {Preloader} from '../components/Preloader.jsx';
import { Search } from '../components/Search.jsx';

class Main extends React.Component {
  state = {
    movies: [],
    loading: true
  }

  componentDidMount () {
    fetch('http://www.omdbapi.com/?apikey=c959a010&s=matrix', {method: 'GET'})
      .then(response => response.json())
      .then(data => this.setState({movies: data.Search, loading: false}))
  }

  searchMovies = (str, type = 'all') => {
    this.setState({loading: true})
    fetch(`http://www.omdbapi.com/?apikey=c959a010&s=${str}${
      type !== 'all' ? `&type=${type}` : ''}`, 
      {method: 'GET'})
    .then(response => response.json())
    .then(data => this.setState({movies: data.Search, loading: false}))
  }


  render() {
    const {movies, loading} = this.state

    return <div className="mainPage">
              <main className="container content">
                <Search  searchMovies={this.searchMovies}/>
                {
                  loading ? (
                    <Preloader/>  
                    ) : (<Movies movies={movies}/>)
                }
              </main>
            </div>
  }
}

export {Main}