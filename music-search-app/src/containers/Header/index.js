import React from 'react';

import './header.css';

import { ButtonPrimary } from '../../components/Button/button';
import { ButtonLink } from '../../components/Button/button';

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
          className={`${isMobile ? "d-none" : "d-block"} login-btn-wrapper`}
        >
          <ButtonLink value="Sign up" />
          <ButtonPrimary value="Log in" />
        </div>
      </div>
    </>
  );
}

export default Header;