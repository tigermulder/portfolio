import React, { createContext, useContext, useState, useEffect } from 'react';

const NavigationContext = createContext();

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};

export const NavigationProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(1); // Home이 기본값

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const setActiveMenuItem = (index) => {
    setActiveSection(index);
    closeMenu(); // 모바일에서 메뉴 선택 시 메뉴 닫기
  };

  // 스크롤에 따른 활성 섹션 감지
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          const sectionMap = {
            'home': 1,
            'about': 2,
            'archive': 3,
            'skills': 4,
            'chronology': 5,
            'portfolio': 6,
            'contact': 7
          };
          
          if (sectionMap[sectionId]) {
            setActiveSection(sectionMap[sectionId]);
          }
        }
      });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  // 메뉴가 열려있을 때 외부 클릭으로 닫기
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.nav_menu') && !event.target.closest('.nav_toggle')) {
        closeMenu();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  const value = {
    isMenuOpen,
    activeSection,
    toggleMenu,
    closeMenu,
    setActiveMenuItem
  };

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
}; 