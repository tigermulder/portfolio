import React from 'react';
import { useNavigation } from '../../contexts/NavigationContext';
import { useLanguage } from '../../contexts/LanguageContext';
import "./header.css"

const Header = () => {
  const { isMenuOpen, activeSection, toggleMenu, setActiveMenuItem } = useNavigation();
  const { t } = useLanguage();

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav_logo">{`</ Park Hyun Sung >`}</a>

        <div className={isMenuOpen ? "nav_menu show-menu":"nav_menu"}>
          <ul className="nav_list grid">
            <li className="nav_item">
              <a href="#home" className={activeSection === 1 ? "nav_link active-link" : "nav_link"} onClick={()=> setActiveMenuItem(1)}>
                <i className="uil uil-estate nav_icon"></i> {t('home')}
              </a>
            </li>
            <li className="nav_item">
              <a href="#about" className={activeSection === 2 ? "nav_link active-link" : "nav_link"} onClick={()=> setActiveMenuItem(2)}>
                <i className="uil uil-user nav_icon"></i> {t('about')}
              </a>
            </li>
            <li className="nav_item">
              <a href="#archive" className={activeSection === 3 ? "nav_link active-link" : "nav_link"} onClick={()=> setActiveMenuItem(3)}>
                <i className="uil uil-briefcase-alt nav_icon"></i> {t('archive')}
              </a>
            </li>
            <li className="nav_item">
              <a href="#skills" className={activeSection === 4 ? "nav_link active-link" : "nav_link"} onClick={()=> setActiveMenuItem(4)}>
                <i className="uil uil-file-alt nav_icon"></i> {t('skills')}
              </a>
            </li>
            <li className="nav_item">
              <a href="#chronology" className={activeSection === 5 ? "nav_link active-link" : "nav_link"} onClick={()=> setActiveMenuItem(5)}>
                <i className="uil uil-scenery nav_icon"></i> {t('chronology')}
              </a>
            </li>
            <li className="nav_item">
              <a href="#portfolio" className={activeSection === 6 ? "nav_link active-link" : "nav_link"} onClick={()=> setActiveMenuItem(6)}>
                <i className="uil uil-scenery nav_icon"></i> {t('portfolio')}
              </a>
            </li>
            <li className="nav_item">
              <a href="#contact" className={activeSection === 7 ? "nav_link active-link" : "nav_link"} onClick={()=> setActiveMenuItem(7)}>
                <i className="uil uil-message nav_icon"></i> {t('contact')}
              </a>
            </li>
          </ul>
         
          <i className="uil uil-times nav_close" onClick={toggleMenu}></i>
        </div>

        <div className="nav_toggle" onClick={toggleMenu}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  )
}

export default Header
