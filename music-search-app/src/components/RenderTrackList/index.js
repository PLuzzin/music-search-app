import React from 'react';

import { truncate } from '../../services/utils';

import { GoHeart, GoHeartFill } from "react-icons/go";
import { BsFillPlayCircleFill } from "react-icons/bs";


function RenderTrackList({ item, addFavourites, toggleFavourites, handleOpenTrack }) {
  return (
    <div key={item.trackId} id="gridResults">
      <div className="grid-item">
        <div className="img-align">
          <button onClick={() => handleOpenTrack(item.previewUrl)}><BsFillPlayCircleFill /></button>
          <img src={item.artworkUrl100} alt="track cover" />
        </div>
        <div className="title">
          <span className="text-h1" title={item.artistName}>{truncate(item.artistName, 16)}</span>
          <span
            onClick={() => toggleFavourites(item.trackId)}
            className="heart-empty"
          >
            {addFavourites.some(
              (filteredItem) => filteredItem.trackId === item.trackId
            ) ? (
              <GoHeartFill />
            ) : (
              <GoHeart />
            )}
          </span>
        </div>
        <div className="description">
          <span className="track-name" title={item.trackName}>{truncate(item.trackName, 24)}</span>
          <span title={item.collectionName}>{truncate(item.collectionName, 24)}</span>
        </div>
      </div>
    </div>
  );
}

export default RenderTrackList;