import React from 'react';

import './header.css';

import { GoSearch } from 'react-icons/go';


function Header({ isMobile }) {
  return (
    <>
      <div className="header-wrapper">
        <div className="search-wrapper input-group rounded">
          <input
            type="search"
            id="searchField"
            className="form-control rounded"
            placeholder="What do you want to listen to?"
          />
          <span className="input-group-text border-0" id="search-addon">
            <GoSearch className="svg-icons" />
          </span>
        </div>
        <div 
          id="loginBtn" 
          className={`${isMobile ? "d-none" : "d-block"} login-btn-wrapper`}
        >
          <button type="button" className="btn-signup btn btn-link">
            Sign up
          </button>
          <button type="button" className="btn btn-primary">
            Log in
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;