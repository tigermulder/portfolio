import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  // 초기 테마 결정 (localStorage → 시스템 설정)
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('selected-theme');
    if (savedTheme) {
      return savedTheme;
    }
    const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return userPrefersDark ? 'dark' : 'light';
  });

  // 아이콘 상태
  const [icon, setIcon] = useState(() => 
    localStorage.getItem('selected-icon') || (theme === 'dark' ? 'uil-sun' : 'uil-moon')
  );

  // 테마 토글 함수
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  // 테마 변경 시 body 클래스 및 localStorage 업데이트
  useEffect(() => {
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(`${theme}-theme`);
    
    const newIcon = theme === 'dark' ? 'uil-sun' : 'uil-moon';
    setIcon(newIcon);
    
    localStorage.setItem('selected-theme', theme);
    localStorage.setItem('selected-icon', newIcon);
  }, [theme]);

  // 시스템 테마 변경 감지
  useEffect(() => {
    const savedTheme = localStorage.getItem('selected-theme');
    if (savedTheme) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      if (!localStorage.getItem('selected-theme')) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const value = {
    theme,
    icon,
    toggleTheme,
    isDark: theme === 'dark'
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}; 