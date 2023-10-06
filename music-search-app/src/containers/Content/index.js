import React from 'react';

import './content.css';

function Content() {
  return (
    <>
      <div id="ContentList" className="card-wrapper">
        <div className="content-title-wrapper">
            <h4>Playlist</h4>
            <div id="resultCount" className="ms-4"></div>
        </div>
        <div id="gridResults" className="grid-wrapper mt-3">
            
        </div>
        <div id="gridNoResults" className="grid-no-results mt-3">
            <h5>What do you want to listen to?</h5>
            <p>Search by artist name, track name or collection name.</p>
        </div>
      </div>
      <div id="results"></div>
    </>
  );
}

export default Content;