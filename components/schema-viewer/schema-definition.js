import React, { Component } from 'react';

function findXpath(line, xmlData) {
  const xml = xmlData.find((x) => x.line === line.trim());

  if (xml) {
    return xml.xpath;
  }
  return '';
}

function SchemaDefinition({ xml, xmlData }) {
  const xmlLines = xml.split('\n');

  return <div>{xmlLines.map((line) => <pre xpath={findXpath(line, xmlData)}>{line}</pre>)}</div>;
}

export default SchemaDefinition;
