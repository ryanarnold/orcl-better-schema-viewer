import React, { Component } from 'react';
import { SearchResults } from './SearchResults';

const KEY_ARROW_UP = 38;
const KEY_ARROW_DOWN = 40;
const KEY_ENTER = 13;

export default class SearchBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filteredSchemaList: [],
      selectedSchemaIndex: 0,
    };

    this.handleSearchQueryChange = this.handleSearchQueryChange.bind(this);
    this.handleChangeSelectedSchema = this.handleChangeSelectedSchema.bind(this);
    this.handleMouseSelect = this.handleMouseSelect.bind(this);
    this.navigateToSchemaPage = this.navigateToSchemaPage.bind(this);
  }

  handleSearchQueryChange(event) {
    const { schemaList } = this.props;
    const searchQuery = event.target.value.toLowerCase();

    this.setState({
      filteredSchemaList: searchQuery.trim() === '' ? [] : schemaList.filter((schema) => schema.name.toLowerCase().includes(searchQuery)),
      selectedSchemaIndex: 0,
    });
  }

  handleChangeSelectedSchema(event) {
    const { selectedSchemaIndex, filteredSchemaList } = this.state;

    if (event.keyCode === KEY_ARROW_UP) {
      this.setState({
        selectedSchemaIndex: selectedSchemaIndex === 0 ? 0 : selectedSchemaIndex - 1,
      });
    } else if (event.keyCode === KEY_ARROW_DOWN) {
      this.setState({
        selectedSchemaIndex: filteredSchemaList.length === selectedSchemaIndex + 1
          ? selectedSchemaIndex : selectedSchemaIndex + 1,
      });
    } else if (event.keyCode === KEY_ENTER) {
      this.navigateToSchemaPage();
    }
  }

  handleMouseSelect(selectedSchema) {
    const { filteredSchemaList } = this.state;

    const selectedSchemaIndex = filteredSchemaList.findIndex((s) => s.name === selectedSchema);

    this.setState({
      selectedSchemaIndex,
    });
  }

  navigateToSchemaPage() {
    const { filteredSchemaList, selectedSchemaIndex } = this.state;

    if (filteredSchemaList.length > 0) {
      window.location.href = `/schema/${filteredSchemaList[selectedSchemaIndex].name}`;
    }
  }

  render() {
    const { filteredSchemaList } = this.state;
    let { selectedSchemaIndex } = this.state;

    if (selectedSchemaIndex < 0) {
      selectedSchemaIndex = 0;
    }

    const selectedSchema = filteredSchemaList.length > 0
      ? filteredSchemaList[selectedSchemaIndex].name : [];

    return (
      <>
        <input type="text" className="form-control" id="searchBox" placeholder="Search for a schema" onChange={this.handleSearchQueryChange} onKeyDown={this.handleChangeSelectedSchema} />
        {filteredSchemaList.length > 0
          // eslint-disable-next-line max-len
          ? <SearchResults schemaList={filteredSchemaList} selectedSchema={selectedSchema} handleMouseSelect={this.handleMouseSelect} handleMouseClick={this.navigateToSchemaPage} />
          : null}
      </>
    );
  }
}
