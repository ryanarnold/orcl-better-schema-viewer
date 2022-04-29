import React, { Component } from 'react'
import styles from '../../styles/SearchResults.module.css'

export class SearchResults extends Component {

  render() {
    return (
      <div className={styles.resultsBox}>
        {this.props.schemaList.map(schema => 
          <p key={schema.name} className={schema.name === this.props.selectedSchema ? styles.selected : ''}>
            {schema.name}
            <span className={styles.schemaType}>{schema.type}</span>
          </p>
        )}
      </div>
    )
  }
}

export default SearchResults