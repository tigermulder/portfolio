import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const Social = () => {
  const { icon, toggleTheme } = useTheme();

  return (
    <div className="home_social">
      <a
        href="https://github.com/tigermulder"
        className="home_social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="uil uil-github-alt"></i>
      </a>
      <a
        href="https://velog.io/@tiger_front_end/"
        className="home_social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="uil uil-blogger-alt"></i>
      </a>
      <button id="theme-button" onClick={toggleTheme}>
        <i className={`uil ${icon} change-theme`} id="theme-icon"></i>
      </button>
    </div>
  );
};

export default Social;
