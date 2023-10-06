import React from 'react';

import './sidebar.css';

import { GoSearch } from 'react-icons/go';
import { GoHome } from 'react-icons/go';
import { GoHeartFill } from 'react-icons/go';
import { GoHeart } from 'react-icons/go';

// import { Container } from './styles';

function Sidebar() {
  return (
    <div id="sidebar" className="sidebar">
      <div className="card-wrapper">
        <div id="leftNav" className="left-nav">
          <ul>
            <li>
              <a href="index.html" className="btn btn-link">
                <GoHome className="svg-icons" />
                <span className="ms-2">Home</span> 
              </a>
            </li>
            <li>
              <a href="index.html" className="btn btn-link">
                <GoSearch className="svg-icons" />
                <span className="ms-2">Search</span>
              </a>
            </li>
            <li>
              <a href="favourites.html" className="btn btn-link">
                <GoHeartFill className="svg-icons" />
                <span className="ms-2">Your Favourites</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div id="FavouritesListLeft" className="card-wrapper mt-2">
        <div className="favourites-wrapper">
          <h6>Create your Favourites List</h6>
          <span>
            Add tracks to your favourites list by clicking on the {" "}
            <GoHeart />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;