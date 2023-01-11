import React from "react";

class Search extends React.Component {
  state = {
    search: '',
    type: 'all'
  }

  handleKey = (event) => {
    if (event.key === 'Enter') {
      this.props.searchMovies(this.state.search, this.state.type);
    }
  }

  handleFilter = (event) => {
    if (this.state.search) {
      this.setState(() => ({type: event.target.dataset.type}), () => {
        this.props.searchMovies(this.state.search, this.state.type)
      }); 
    } else {
      alert ('Search field is empty');
    }
  }

  render() {
    return  <div className="input-field col s12">
              <input 
                placeholder="Search" 
                type="search" 
                className="validate"
                value={this.state.search}
                onChange={(e) => this.setState({search: e.target.value})}
                onKeyDown={this.handleKey}
                />
                <span className="helper-text" data-error="wrong" data-success="right">Enter movie name</span>
              <button 
                  className="btn waves-effect waves-light light-blue darken-1 search-btn"
                  type="button"
                  onClick={() => (this.props.searchMovies(this.state.search, this.state.type))}
                  >Search
                </button>
                <div className="searchSettings light-blue lighten-5">
                  <p>
                    <label>
                      <input 
                        name="type" 
                        type="radio" 
                        data-type="all"
                        onChange={this.handleFilter}
                        checked={this.state.type === 'all'}
                        />
                      <span className="searchDescr">All</span>
                    </label>
                  </p>
                  <p>
                    <label>
                      <input 
                        name="type" 
                        type="radio" 
                        data-type="movie"
                        onChange={this.handleFilter}
                        checked={this.state.type === 'movie'}
                        />
                      <span className="searchDescr">Movies</span>
                    </label>
                  </p>
                  <p>
                    <label>
                      <input 
                        name="type" 
                        type="radio" 
                        data-type="series"
                        onChange={this.handleFilter}
                        checked={this.state.type === 'series'}
                        />
                      <span className="searchDescr">Series</span>
                    </label>
                  </p>
                </div>
            </div>
  }
}

export {Search}