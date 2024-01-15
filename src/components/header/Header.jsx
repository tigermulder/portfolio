import React, { useState, useEffect } from 'react';
import "./header.css"

const Header = () => {
  /*=============== Toggle Menu ===============*/
  const [Toggle,showMenu] = useState(false);
  const [toggleMenu,setToggleMenuState] = useState(1);
  function toggleMenuPivot(idx){
    setToggleMenuState(idx);
  }
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav_logo">{`</ Park Hyun Sung >`}</a>

        <div className={Toggle ? "nav_menu show-menu":"nav_menu"}>
          <ul className="nav_list grid">
            <li className="nav_item">
              <a href="#home" className={toggleMenu === 1 ? "nav_link active-link" : "nav_link"} onClick={()=> toggleMenuPivot(1)}>
                <i className="uil uil-estate nav_icon"></i> Home
              </a>
            </li>
            <li className="nav_item">
              <a href="#about" className={toggleMenu === 2 ? "nav_link active-link" : "nav_link"} onClick={()=> toggleMenuPivot(2)}>
                <i className="uil uil-user nav_icon"></i> About
              </a>
            </li>
            <li className="nav_item">
              <a href="#archive" className={toggleMenu === 3 ? "nav_link active-link" : "nav_link"} onClick={()=> toggleMenuPivot(3)}>
                <i className="uil uil-briefcase-alt nav_icon"></i> Archive
              </a>
            </li>
            <li className="nav_item">
              <a href="#skills" className={toggleMenu === 4 ? "nav_link active-link" : "nav_link"} onClick={()=> toggleMenuPivot(4)}>
                <i className="uil uil-file-alt nav_icon"></i> Skills
              </a>
            </li>
            <li className="nav_item">
              <a href="#chronology" className={toggleMenu === 5 ? "nav_link active-link" : "nav_link"} onClick={()=> toggleMenuPivot(5)}>
                <i className="uil uil-scenery nav_icon"></i> Chronology
              </a>
            </li>
            <li className="nav_item">
              <a href="#portfolio" className={toggleMenu === 6 ? "nav_link active-link" : "nav_link"} onClick={()=> toggleMenuPivot(6)}>
                <i className="uil uil-scenery nav_icon"></i> Portfolio
              </a>
            </li>
            <li className="nav_item">
              <a href="#contact" className={toggleMenu === 7 ? "nav_link active-link" : "nav_link"} onClick={()=> toggleMenuPivot(7)}>
                <i className="uil uil-message nav_icon"></i> Contact
              </a>
            </li>
          </ul>
         
          <i className="uil uil-times nav_close" onClick={()=>showMenu(!Toggle)}></i>
        </div>

        <div className="nav_toggle" onClick={()=>showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  )
}

export default Header
