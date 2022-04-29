import React, { Component } from 'react'
import SearchResults from './SearchResults'
import schemaList from '../../schemas/schema-list'

export default class SearchBox extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchQuery: '',
      selectedSchema: 'Cm-Something',
    }

    this.handleSearchQueryChange = this.handleSearchQueryChange.bind(this);
  }

  handleSearchQueryChange(event) {
    this.setState({
      searchQuery: event.target.value
    })
  }

  render() {
    const filteredSchemaList = this.state.searchQuery.trim() === '' ? [] : schemaList.filter(schema => {
      return schema.name.toLowerCase().includes(this.state.searchQuery.toLowerCase())
    })

    return (
      <>
        <input type="text" className="form-control" id="searchBox" placeholder="Search for a schema" onChange={this.handleSearchQueryChange} />
        {filteredSchemaList.length > 0 ? <SearchResults schemaList={filteredSchemaList} selectedSchema={this.state.selectedSchema} /> : null}
      </>
    )
  }
}
