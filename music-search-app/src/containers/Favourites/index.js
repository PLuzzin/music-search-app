import React from "react";

import RenderTrackList from "../../components/RenderTrackList";

import "./favourites.css";

function Favourites({ items, addFavourites, toggleFavourites, handleOpenTrack }) {

  return (
    <>
      <div id="ContentList" className="card-wrapper">
        <div className="content-title-wrapper">
          <h4>Your Favourites</h4>
        </div>

        <div className="grid-wrapper mt-3">
          {Array.isArray(addFavourites)
            ? addFavourites.map((item) => {
                return (
                  <RenderTrackList
                    item={item}
                    addFavourites={addFavourites}
                    toggleFavourites={toggleFavourites}
                    handleOpenTrack={handleOpenTrack}
                  />
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
