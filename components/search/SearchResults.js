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
          <div key={schema.name} className={schema.name === selectedSchema ? styles.selected : ''}>
            <button type="button" className={styles.unbutton} onClick={handleMouseClick} schemaname={schema.name} onMouseEnter={this.handleMouseEnter}>
              {schema.name}
              <span className={styles.schemaType}>{schema.type}</span>
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default SearchResults;
