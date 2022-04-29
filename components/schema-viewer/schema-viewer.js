import React from 'react';
import XpathViewer from './xpath-viewer';
import SchemaDefinition from './schema-definition';

function SchemaViewer({ schema, xmlData }) {
  return (
    <div>
      <h1 className="fw-lighter mt-3">{schema.name}</h1>
      <h6 className="text-secondary fw-lighter">{schema.type}</h6>
      <div className="border rounded p-2 mt-3 overflow-scroll code-div">
        <SchemaDefinition xml={schema.xml} xmlData={xmlData} />
      </div>
      <XpathViewer />
    </div>
  );
}

export default SchemaViewer;
