import React, { Component } from 'react';
import styles from '../../styles/SearchResults.module.css';

export class SearchResults extends Component {
  constructor(props) {
    super(props);

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
  }

  handleMouseEnter(event) {
    const { handleMouseSelect } = this.props;
    handleMouseSelect(event.target.getAttribute('schemaname'));
  }

  render() {
    const { schemaList, selectedSchema, handleMouseClick } = this.props;

    return (
      <div className={styles.resultsBox}>
        {schemaList.map((schema) => (
          <button type="button" key={schema.name} schemaname={schema.name} className={schema.name === selectedSchema ? styles.selected : ''} onMouseEnter={this.handleMouseEnter} onClick={handleMouseClick}>
            {schema.name}
            <span className={styles.schemaType}>{schema.type}</span>
          </button>
        ))}
      </div>
    );
  }
}

export default SearchResults;
