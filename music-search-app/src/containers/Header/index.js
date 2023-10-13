import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import "./header.css";

import { ButtonPrimary } from "../../components/Button/button";
import { ButtonLink } from "../../components/Button/button";

import { GoSearch } from "react-icons/go";

function Header({ isMobile, onSearchChange }) {
  // eslint-disable-next-line
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    const newSearch = e.target.value;
    setSearch(newSearch);
    onSearchChange(newSearch);
  };

  // Hide search component when into favourites page.
  let location = useLocation();
  // console.log(location.pathname);

  return (
    <>
      <div 
        className={`${location.pathname === '/favourites' ? 'justify-content-end' : 'justify-content-between' } header-wrapper`}
      >
        <div 
          className={`${location.pathname === '/favourites' ? 'd-none' : 'd-flex' } search-wrapper input-group rounded`}
        >
          <input
            type="search"
            className="form-control rounded"
            placeholder="What do you want to listen to?"
            onChange={handleSearch}
          />
          <span className="input-group-text border-0" id="search-addon">
            <GoSearch className="svg-icons" />
          </span>
        </div>
        <div className={`${isMobile ? "d-none" : "d-block"} login-btn-wrapper`}>
          <ButtonLink value="Sign up" />
          <ButtonPrimary value="Log in" />
        </div>
      </div>
    </>
  );
}

export default Header;
