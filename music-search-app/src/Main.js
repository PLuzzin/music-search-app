import React, { useState, useEffect } from "react";
import { useResponsive } from "./services/utils";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import "./assets/css/mdb.dark.min.css";
import "./Main.css";
import "./global.css";

import api from "./services/api";

import Header from "./containers/Header";
import Sidebar from "./containers/Sidebar";
import SidebarMobile from "./containers/SidebarMobile";
import Content from "./containers/Content";
import Favourites from "./containers/Favourites";
import Footer from "./containers/Footer";

function Main() {
  // eslint-disable-next-line
  const { isMobile, isTablet, isDesktop } = useResponsive();
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");

  const [addFavourites, setAddFavourites] = useState([]);

  useEffect(() => {
    async function loadSearchResults() {
      const response = await api.get(
        `/search?term=${search}&entity=song&limit=20`
      );
      setItems(response.data);
    }
    // chamar funcao
    loadSearchResults();
  }, [search]);

  const handleSearchChange = (newSearch) => {
    setSearch(newSearch);
  };

  // const handleClick = () => {
  //   console.log("parent click");
  // };

  const toggleFavourites = (fav_id) => {
    // check if the item already exists on the array
    const isFavourite = addFavourites.some((item) => item.trackId === fav_id);

    // if item already exists, remove it
    if (isFavourite) {
      setAddFavourites((prevFavourites) =>
        prevFavourites.filter((item) => item.trackId !== fav_id)
      );
    } else {
      // if item is not on the Array, add item.
      const selectedItem = items.results.find((item) => item.trackId === fav_id);
      if (selectedItem) {
        setAddFavourites((prevFavourites) => [...prevFavourites, selectedItem]);
      }
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <header>
                <Header
                  isMobile={isMobile}
                  onSearchChange={handleSearchChange}
                />
              </header>
              <aside>
                <Sidebar />
                <SidebarMobile isMobile={isMobile} />
              </aside>
              <article>
                <Outlet />
              </article>
              <footer>
                <Footer />
              </footer>
            </main>
          }
        >
          <Route
            path="/"
            element={
              <Content
                items={items}
                addFavourites={addFavourites}
                toggleFavourites={toggleFavourites}
              />
            }
          />
          <Route
            path="favourites"
            element={
              <Favourites
                items={items}
                addFavourites={addFavourites}
                toggleFavourites={toggleFavourites}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
