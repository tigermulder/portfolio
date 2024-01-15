import React, { useState, useEffect } from 'react';

const Social = () => {
  /*=============== dark/light Mode ===============*/
  const [theme, setTheme] = useState(() => localStorage.getItem('selected-theme') || 'light');
  const [icon, setIcon] = useState(() => localStorage.getItem('selected-icon') || 'uil-sun');

  useEffect(() => {
    document.body.classList.toggle('dark-theme', theme === 'dark');
    setIcon(theme === 'dark' ? 'uil-sun' : 'uil-moon'); // 수정된 부분
    localStorage.setItem('selected-theme', theme);
    localStorage.setItem('selected-icon', icon);
  }, [theme, icon]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  return (
    <div className="home_social">
      <a href="https://github.com/tigermulder" className="home_social-icon" target='_blank'>
        <i className="uil uil-github-alt"></i>
      </a>
      <a href="https://velog.io/@tiger_front_end/" className="home_social-icon" target='_blank'>
        <i className="uil uil-blogger-alt"></i>
      </a>
      <button id="theme-button" className={theme} onClick={toggleTheme}>
        <i className={`uil ${icon} change-theme`} id="theme-icon"></i>
      </button>
    </div>
  )
}

export default Social
