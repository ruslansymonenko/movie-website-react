import React from "react";

class Search extends React.Component {
  state = {
    search: ''
  }

  render() {
    return  <div className="input-field col s12">
              <input 
                placeholder="Search" 
                type="search" 
                className="validate"
                value={this.state.search}
                onChange={(e) => this.setState({search: e.target.value})}
                />
              <span className="helper-text" data-error="wrong" data-success="right">Enter movie name</span>
            </div>
  }
}

export {Search}