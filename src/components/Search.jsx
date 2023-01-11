import React from "react";

class Search extends React.Component {
  state = {
    search: ''
  }

  handleKey = (event) => {
    if (event.key === 'Enter') {
      this.props.searchMovies(this.state.search)
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
                <span class="helper-text" data-error="wrong" data-success="right">Enter movie name</span>
              <button 
                  class="btn waves-effect waves-light light-blue darken-1 search-btn"
                  type="button"
                  onClick={() => (this.props.searchMovies(this.state.search))}
                  >Search
                </button>
            </div>
  }
}

export {Search}