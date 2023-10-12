import React from 'react';
import { Link } from 'react-router-dom';

import './sidebar_menu.css';

import { GoSearch, GoHome, GoHeartFill } from 'react-icons/go';

function SidebarMenu() {
  return (
    <div className="left-nav">
      <ul>
        <li>
          <Link to="/" className="btn btn-link">
            <GoHome className="svg-icons" />
            <span className="ms-2">Home</span> 
          </Link>
        </li>
        <li>
          <Link to="/" className="btn btn-link">
            <GoSearch className="svg-icons" />
            <span className="ms-2">Search</span>
          </Link>
        </li>
        <li>
          <Link to="/favourites" className="btn btn-link">
            <GoHeartFill className="svg-icons" />
            <span className="ms-2">Your Favourites</span>
          </Link>
        </li>
      </ul>
      
    </div>
  );
}

export default SidebarMenu;