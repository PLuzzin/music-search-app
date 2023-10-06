import React, {useState} from "react";

import SidebarMenu from '../../components/SidebarMenu';
import SidebarFavourites from '../../components/SidebarFavourites';

import "./sidebar_mobile.css";

import { GoXCircle } from 'react-icons/go';
import { MdMenu } from 'react-icons/md';


function SidebarMobile({ isMobile }) {
  const [isSidebarMobile, setIsSidebarMobile] = useState(false);

  const handleSidebarMobile = () => {
    setIsSidebarMobile(!isSidebarMobile);
  }

  return (
    <div className={`${isMobile ? "d-block" : "d-none"}`}>

      <div 
        className="burger-menu btn text-white"
      >
        <MdMenu 
          size={20} 
          onClick={handleSidebarMobile}
        />
      </div>

      <div className={`${isSidebarMobile ? "show-sidebarM" : "hide-sidebarM"}`}>
        <div className="card-wrapper">
          <div className="sidebar-header">
            <div className="btn text-white">
              <GoXCircle 
                size={20} 
                onClick={handleSidebarMobile}
              />
            </div>
          </div>
          <SidebarMenu />
        </div>
        <SidebarFavourites />
      </div>
    </div>
    
  );
}

export default SidebarMobile;
