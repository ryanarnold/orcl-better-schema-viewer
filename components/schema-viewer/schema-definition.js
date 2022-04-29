import React from 'react';

function findXpath(line, xmlData) {
  const xml = xmlData.find((x) => x.line === line.trim());

  if (xml) {
    return xml.xpath;
  }
  return '';
}

function SchemaDefinition({ xml, xmlData, updateXpath }) {
  const xmlLines = xml.split('\n');

  const handleClick = (event) => {
    const xpath = event.target.getAttribute('xpath');
    updateXpath(xpath);
  };

  return <div>{xmlLines.map((line) => <pre className="m-0" xpath={findXpath(line, xmlData)} onClick={handleClick}>{line}</pre>)}</div>;
}

export default SchemaDefinition;
