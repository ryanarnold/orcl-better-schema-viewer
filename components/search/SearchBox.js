import React, { Component } from 'react'
import SearchResults from './SearchResults'
import schemaList from '../../schemas/schema-list'

export default class SearchBox extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedSchema: 'Cm-Something'
    }
  }

  render() {
    const filteredSchemaList = schemaList;

    return (
      <>
        <input type="text" className="form-control" id="searchBox" placeholder="Search for a schema" />
        <SearchResults schemaList={filteredSchemaList} selectedSchema={this.state.selectedSchema}/>
      </>
    )
  }
}
