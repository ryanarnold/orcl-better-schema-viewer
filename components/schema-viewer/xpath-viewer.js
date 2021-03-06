import React from 'react';

function XpathViewer({ xpath }) {
  function copyXpathToClipboard() {
    navigator.clipboard.writeText(xpath);
  }

  return (
    <div className="container fixed-bottom">
      <div className="row mt-5">
        <div className="col" />
        <div className="col-12">
          <div className="input-group mb-3">
            <input type="text" className="form-control" id="searchBox" placeholder="Click on a node to get the xpath" value={xpath} readOnly />
            <div className="input-group-append">
              <button className="btn btn-primary" type="button" onClick={copyXpathToClipboard}>Copy</button>
            </div>
          </div>
        </div>
        <div className="col" />
      </div>
    </div>
  );
}

export default XpathViewer;
