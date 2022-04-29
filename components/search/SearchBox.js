import React, { Component } from 'react'
import SearchResults from './SearchResults'
import schemaList from '../../schemas/schema-list'

const KEY_ARROW_UP = 38;
const KEY_ARROW_DOWN = 40;
const KEY_ENTER = 13;

export default class SearchBox extends Component {

  constructor(props) {
    super(props);

    this.state = {
      filteredSchemaList: [],
      selectedSchemaIndex: 0
    }

    this.handleSearchQueryChange = this.handleSearchQueryChange.bind(this);
    this.handleChangeSelectedSchema = this.handleChangeSelectedSchema.bind(this);
    this.handleMouseSelect = this.handleMouseSelect.bind(this);
    this.navigateToSchemaPage = this.navigateToSchemaPage.bind(this);
  }

  handleSearchQueryChange(event) {
    const searchQuery = event.target.value.toLowerCase()

    this.setState({
      filteredSchemaList: searchQuery.trim() === '' ? [] : schemaList.filter(schema => {
        return schema.name.toLowerCase().includes(searchQuery)
      }),
      selectedSchemaIndex: 0
    })
  }

  handleChangeSelectedSchema(event) {
    if (event.keyCode === KEY_ARROW_UP) {
      this.setState({
        selectedSchemaIndex: this.state.selectedSchemaIndex === 0 ? 0 : this.state.selectedSchemaIndex - 1
      })
    } else if (event.keyCode === KEY_ARROW_DOWN) {
      this.setState({
        selectedSchemaIndex: this.state.filteredSchemaList.length === this.state.selectedSchemaIndex + 1 ? this.state.selectedSchemaIndex : this.state.selectedSchemaIndex + 1
      })
    } else if (event.keyCode === KEY_ENTER) {
      this.navigateToSchemaPage()
    }
  }

  navigateToSchemaPage() {
    if (this.state.filteredSchemaList.length > 0) {
      window.location.href = '/schema/' + this.state.filteredSchemaList[this.state.selectedSchemaIndex].name
    }
  }

  handleMouseSelect(mouseSelectedSchema) {
    const selectedSchemaIndex = this.state.filteredSchemaList.findIndex(schema => {
      return schema.name === mouseSelectedSchema
    })

    this.setState({
      selectedSchemaIndex
    })
  }

  render() {
    const selectedSchema = this.state.filteredSchemaList.length > 0 ? this.state.filteredSchemaList[this.state.selectedSchemaIndex].name : []

    return (
      <>
        <input type="text" className="form-control" id="searchBox" placeholder="Search for a schema" onChange={this.handleSearchQueryChange} onKeyDown={this.handleChangeSelectedSchema} />
        {this.state.filteredSchemaList.length > 0 ? <SearchResults schemaList={this.state.filteredSchemaList} selectedSchema={selectedSchema} handleMouseSelect={this.handleMouseSelect} handleMouseClick={this.navigateToSchemaPage} /> : null}
      </>
    )
  }
}
