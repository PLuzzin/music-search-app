import React from 'react';

import './content.css';

function Content({items, search}) {

  return (
    <>
      <div id="ContentList" className="card-wrapper">
        <div className="content-title-wrapper">
            <h4>Playlist</h4>
            <div id="resultCount" className="ms-4"></div>
        </div>

        <div className="grid-wrapper mt-3">
          {items.filter(item => item.name.includes(search)).map(filteredItem => (
            <>
              <div 
                id="gridResults" 
                className=""
                key={filteredItem.id}
                style={filteredItem.length > 0 ? {display: "flex"}:{diplay:"none"}}
              >
                <div className="grid-item">
                  <div className="img-align">
                    <img src="https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/08/11/d2/0811d2b3-b4d5-dc22-1107-3625511844b5/00602537869770.rgb.jpg/100x100bb.jpg" alt="" />
                  </div>
                  <div className="title">
                    <span className="text-h1">{filteredItem.name}</span>
                    <span className="heart-empty"></span>
                  </div>
                  <div className="description">
                    <span className="track-name">{filteredItem.email}</span>
                    <span>{filteredItem.gender}</span>
                    <span>{filteredItem.status}</span>
                  </div>
                </div>
              </div>

            </>
            
            
          ))}
        </div>

        <div 
          id="gridNoResults" 
          className="grid-no-results mt-3"
        >
            <h5>What do you want to listen to?</h5>
            <p>Search by artist name, track name or collection name.</p>
        </div> 


        {/* <div 
          id="gridResults" 
          className="grid-wrapper mt-3"
          style={items.length <= 0 ? {display: "flex"}:{diplay:"none"}}
        >
          {items.map((item) => {
            return (
              <div key={item.id} className="grid-item">
                <div className="img-align">
                  <img src="https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/08/11/d2/0811d2b3-b4d5-dc22-1107-3625511844b5/00602537869770.rgb.jpg/100x100bb.jpg" alt="" />
                </div>
                <div className="title">
                  <span className="text-h1">{item.name}</span>
                  <span className="heart-empty"></span>
                </div>
                <div className="description">
                  <span className="track-name">{item.email}</span>
                  <span>{item.gender}</span>
                  <span>{item.status}</span>
                </div>
              </div>
            );
          })}

          
        </div>  */}


      </div>
      
    </>
  );
}

export default Content;