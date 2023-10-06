import React from "react";

import "./sidebar_mobile.css";

import { GoXCircle } from 'react-icons/go';
import { GoSearch } from 'react-icons/go';
import { GoHome } from 'react-icons/go';
import { GoHeartFill } from 'react-icons/go';
import { GoHeart } from 'react-icons/go';
import { MdMenu } from 'react-icons/md';

function SidebarMobile({ isMobile }) {
  return (
    <div className={`${isMobile ? "d-block" : "d-none"}`}>

      <div className="burger-menu btn text-white">
        <MdMenu 
          size={20} 
          onClick={() => {}}
        />
      </div>

      <div className="sidebarM">
        <div className="card-wrapper">
          <div className="sidebar-header">
            <div className="btn text-white">
              <GoXCircle size={20} className="close" />
            </div>
          </div>
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
    </div>
    
  );
}

export default SidebarMobile;
