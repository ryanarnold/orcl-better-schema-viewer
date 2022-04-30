/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useEffect } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { xcode } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

function findXpath(line, xmlData) {
  const xml = xmlData.find((x) => x.line === line.trim());

  if (xml) {
    return xml.xpath;
  }
  return '';
}

function SchemaDefinition({ xml, xmlData, updateXpath }) {
  const [xmlLines, setXmlLines] = useState([]);

  const handleClick = (event) => {
    const xpath = event.currentTarget.getAttribute('xpath');
    updateXpath(xpath);
  };

  const codeStyle = {
    marginBottom: '0',
    padding: '0',
    fontSize: '1rem',
  };

  useEffect(() => setXmlLines(xml.split('\n').map((line, index) => ({ line, index }))));

  return (
    xmlLines.map((line) => (
      // <pre className="m-0" >
      <SyntaxHighlighter language="xml" style={xcode} customStyle={codeStyle} xpath={findXpath(line.line, xmlData)} onClick={handleClick} key={line.index}>
        {line.line}
      </SyntaxHighlighter>
      // </pre>
    ))
  );
}

export default SchemaDefinition;
