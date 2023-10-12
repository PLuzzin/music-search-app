import React, { useState, useEffect } from 'react';
import { useResponsive } from './services/utils';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import "./assets/css/mdb.dark.min.css";
import "./Main.css";
import "./global.css";

import api from './services/api';

import Header from './containers/Header';
import Sidebar from './containers/Sidebar';
import SidebarMobile from './containers/SidebarMobile';
import Content from './containers/Content';
import Favourites from './containers/Favourites';
import Footer from './containers/Footer';


function Main() {
  // eslint-disable-next-line
  const { isMobile, isTablet, isDesktop } = useResponsive();
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function loadSearchResults(){
      const response = await api.get(`/search?term=${search}&entity=song&limit=20`);
      setItems(response.data);
    }
    // chamar funcao
    loadSearchResults();
    
  }, [search]);

  const handleSearchChange = (newSearch) => {
    setSearch(newSearch);
  }
  
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <header>
                <Header isMobile={isMobile} onSearchChange={handleSearchChange} />
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
          <Route path="/" element={
            <Content items={items} search={search} />
          }/>
          <Route path="favourites" element={<Favourites />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
