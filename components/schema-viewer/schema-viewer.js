import React, { Component } from 'react';
import XpathViewer from './xpath-viewer';

export class SchemaViewer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { schema } = this.props;

    return (
      <div>
        <h1>{schema.name}</h1>
        <h6>{schema.type}</h6>
        <div>{schema.xml}</div>
        <XpathViewer />
      </div>
    );
  }
}

export default SchemaViewer;
