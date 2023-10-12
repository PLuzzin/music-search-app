import React from "react";

import "./favourites.css";

import { GoHeart, GoHeartFill } from "react-icons/go";

function Favourites({ items, addFavourites, toggleFavourites }) {

  return (
    <>
      <div id="ContentList" className="card-wrapper">
        <div className="content-title-wrapper">
          <h4>Your Favourites</h4>
          {/* <button onClick={handleClick}>Apply</button> */}
        </div>

        <div className="grid-wrapper mt-3">
          {Array.isArray(addFavourites)
            ? addFavourites.map((item) => {
                return (
                  <div key={item.trackId} id="gridResults">
                    <div className="grid-item">
                      <div className="img-align">
                        <img src={item.artworkUrl100} alt="" />
                      </div>
                      <div className="title">
                        <span className="text-h1">{item.artistName}</span>
                        <span
                          onClick={() => toggleFavourites(item.trackId)}
                          className="heart-empty"
                        >
                          {addFavourites.some(
                            (filteredItem) =>
                              filteredItem.trackId === item.trackId
                          ) ? (
                            <GoHeartFill />
                          ) : (
                            <GoHeart />
                          )}
                        </span>
                      </div>
                      <div className="description">
                        <span className="track-name">{item.trackName}</span>
                        <span>{item.collectionName}</span>
                      </div>
                    </div>
                  </div>
                );
              })
            : ""}
        </div>

        <div
          id="gridNoResults"
          className="show-gridNoResults mt-3"
          style={items.length > 0 ? { display: "flex" } : { diplay: "none" }}
        >
          <h5>What do you want to listen to?</h5>
          <p>Search by artist name, track name or collection name.</p>
        </div>
      </div>
    </>
  );
}

export default Favourites;
