import React from 'react';

import SidebarMenu from '../../components/SidebarMenu';
import SidebarFavourites from '../../components/SidebarFavourites';

import './sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="card-wrapper">
        <SidebarMenu />
      </div>
      <SidebarFavourites />
    </div>
  );
}

export default Sidebar;