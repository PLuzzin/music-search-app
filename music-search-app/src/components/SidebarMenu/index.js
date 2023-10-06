import React from 'react';

import './sidebar_menu.css';

import { GoSearch } from 'react-icons/go';
import { GoHome } from 'react-icons/go';
import { GoHeartFill } from 'react-icons/go';

function SidebarMenu() {
  return (
    <div className="left-nav">
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
  );
}

export default SidebarMenu;