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
        <h1 className="fw-lighter mt-3">{schema.name}</h1>
        <h6 className="text-secondary fw-lighter">{schema.type}</h6>
        <div className="border rounded p-2 mt-3">
          <pre>
            {schema.xml}
          </pre>
        </div>
        <XpathViewer />
      </div>
    );
  }
}

export default SchemaViewer;
