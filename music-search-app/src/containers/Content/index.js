import React from "react";

import RenderTrackList from "../../components/RenderTrackList";

import "./content.css";

function Content({ items, addFavourites, toggleFavourites, handleOpenTrack }) {
  return (
    <>
      <div id="ContentList" className="card-wrapper">
        <div className="content-title-wrapper">
          <h4>Playlist</h4>
          <div id="resultCount" className="ms-4"></div>
        </div>

        <div className="grid-wrapper mt-3">
          {Array.isArray(items.results)
            ? items.results.map((item) => {
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

export default Content;
