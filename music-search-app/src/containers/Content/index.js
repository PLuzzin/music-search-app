import React, { useState } from 'react';

import './content.css';

import { GoHeart, GoHeartFill } from 'react-icons/go';

function Content({items, search}) {
  const [addFavourites, setAddFavourites] = useState([]);

  const toggleFavourites = (fav_id) => {
    // check if the item already exists on the array
    const isFavourite = addFavourites.some((item) => item.id === fav_id);

    // if item already exists, remove it
    if(isFavourite){
      setAddFavourites((prevFavourites) => 
        prevFavourites.filter((item) => item.id !== fav_id)
      );
    }else {
      // if item is not on the Array, add item.
      const selectedItem = items.find((item) => item.id === fav_id);
      if(selectedItem){
        setAddFavourites((prevFavourites) => [...prevFavourites, selectedItem])

      }
    }
    console.log(addFavourites)

  }

  return (
    <>
      <div id="ContentList" className="card-wrapper">
        <div className="content-title-wrapper">
            <h4>Playlist</h4>
            <div id="resultCount" className="ms-4"></div>
        </div>

        <div className="grid-wrapper mt-3">
          {items.filter(item => item.name.includes(search)).map(filteredItem => (
            
              <div 
                id="gridResults" 
                key={filteredItem.id}
              >
                <div className="grid-item">
                  <div className="img-align">
                    <img src="https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/08/11/d2/0811d2b3-b4d5-dc22-1107-3625511844b5/00602537869770.rgb.jpg/100x100bb.jpg" alt="" />
                  </div>
                  <div className="title">
                    <span className="text-h1">{filteredItem.name}</span>
                    <span onClick={() => toggleFavourites(filteredItem.id)} className="heart-empty">
                      {addFavourites.some((item) => item.id === filteredItem.id) ? (<GoHeartFill />) : (<GoHeart />)}
                    </span>
                  </div>
                  <div className="description">
                    <span className="track-name">{filteredItem.email}</span>
                    <span>{filteredItem.gender}</span>
                    <span>{filteredItem.status}</span>
                  </div>
                </div>
              </div>
            
          ))}
        </div>
        
        <div 
          id="gridNoResults" 
          className="show-gridNoResults mt-3"
          style={items.length > 0 ? { display: "flex" } : { diplay:"none" }}
        >
            <h5>What do you want to listen to?</h5>
            <p>Search by artist name, track name or collection name.</p>
        </div> 

      </div>
      
    </>
  );
}

export default Content;