import React, { useState, useEffect } from 'react';
import { useResponsive } from './services/utils';

import "./assets/css/mdb.dark.min.css";
import "./App.css";
import "./global.css";

import api from './services/api';

import Header from './containers/Header';
import Sidebar from './containers/Sidebar';
import SidebarMobile from './containers/SidebarMobile';
import Content from './containers/Content';
import Footer from './containers/Footer';


function App() {
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
    <main>
      <header>
        <Header isMobile={isMobile} onSearchChange={handleSearchChange} />
      </header>
      <aside>
        <Sidebar />
        <SidebarMobile isMobile={isMobile} />
      </aside>
      <article>
        <Content items={items} search={search} />
      </article>
      <footer>
          <Footer />
      </footer>
    </main>
  );
}

export default App;
