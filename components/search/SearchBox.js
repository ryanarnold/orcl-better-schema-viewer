import React, { Component } from 'react'
import SearchResults from './SearchResults'

export default class SearchBox extends Component {
  render() {
    return (
      <>
        <input type="text" className="form-control" id="searchBox" placeholder="Search for a schema"/>
        <SearchResults/>
      </>
    )
  }
}
