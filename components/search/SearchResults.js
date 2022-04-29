import React, { Component } from 'react'
import styles from '../../styles/SearchResults.module.css'

export class SearchResults extends Component {

  constructor(props) {
    super(props)
    
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
  }

  handleMouseEnter(event) {
    this.props.handleMouseSelect(event.target.getAttribute('schemaname'))
  }

  render() {
    return (
      <div className={styles.resultsBox}>
        {this.props.schemaList.map(schema => 
          <p key={schema.name} schemaname={schema.name} className={schema.name === this.props.selectedSchema ? styles.selected : ''} onMouseEnter={this.handleMouseEnter}>
            {schema.name}
            <span className={styles.schemaType}>{schema.type}</span>
          </p>
        )}
      </div>
    )
  }
}

export default SearchResults