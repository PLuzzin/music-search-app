import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Content from './containers/Content';
import Favourites from './containers/Favourites';


function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="favourites" element={<Favourites />} />
      </Routes>
    </BrowserRouter>

  );
}

export default Router;