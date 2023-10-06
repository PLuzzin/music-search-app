import React from 'react';

import './sidebar_favourites.css';

import { GoHeart } from 'react-icons/go';

function SidebarFavourites() {
  return (
    <div className="card-wrapper mt-2">
      <div className="favourites-wrapper">
        <h6>Create your Favourites List</h6>
        <span>
          Add tracks to your favourites list by clicking on the {" "}
          <GoHeart />
        </span>
      </div>
    </div>
  );
}

export default SidebarFavourites;