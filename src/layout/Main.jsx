import React from "react";
import {Movies} from '../components/Movies.jsx';
import {Preloader} from '../components/Preloader.jsx';
import { Search } from '../components/Search.jsx';

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
  state = {
    movies: [],
    loading: true
  }

  componentDidMount () {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`, {method: 'GET'})
      .then(response => response.json())
      .then(data => this.setState({movies: data.Search, loading: false}))
      .catch((err) => {
        console.error(err);
        this.setState({loading: false})
      })
  }

  searchMovies = (str, type = 'all') => {
    this.setState({loading: true})
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
      type !== 'all' ? `&type=${type}` : ''}`, 
      {method: 'GET'})
    .then(response => response.json())
    .then(data => this.setState({movies: data.Search, loading: false}))
    .catch((err) => {
      console.error(err);
      this.setState({loading: false})
    })
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