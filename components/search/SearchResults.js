import React, { Component } from 'react'
import schemaList from '../../schemas/schema-list'
import styles from '../../styles/SearchResults.module.css'

export class SearchResults extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selected: 'Cm-Something'
    }
  }

  render() {
    return (
      <div className={styles.resultsBox}>
        {schemaList.map(schema => 
          <p key={schema.name} className={schema.name === this.state.selected ? styles.selected : ''}>
            {schema.name}
            <span className={styles.schemaType}>{schema.type}</span>
          </p>
        )}
      </div>
    )
  }
}

export default SearchResults