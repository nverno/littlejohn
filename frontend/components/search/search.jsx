import React, { Component } from 'react';

import SearchIcon from './search_icon';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
  }

  handleChange(property) {
    return e => this.setState({ [property]: e.target.value });
  }
  
  render() {
    const { query } = this.state;
    
    return (
      <div className="search-container">
        <div className="search-inner-container">
          <div className="search-icon-container">
            <SearchIcon />
          </div>
          <input
            type="search"
            className="search-input"
            value={query}
            onChange={this.handleChange('query')}
            placeholder='Search'
          />
        </div>
      </div>
    );
  }
}
