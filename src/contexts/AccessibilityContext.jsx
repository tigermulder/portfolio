import React, { createContext, useContext, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const AccessibilityContext = createContext();

export const AccessibilityProvider = ({ children }) => {
  const [fontSize, setFontSize] = useLocalStorage('portfolio-font-size', 'small');
  
  // 폰트 크기 설정을 CSS 변수로 적용
  useEffect(() => {
    const root = document.documentElement;
    
    switch (fontSize) {
      case 'small':
        root.style.setProperty('--font-scale', '0.875');
        break;
      case 'large':
        root.style.setProperty('--font-scale', '1.05');
        break;
      default: // medium
        root.style.setProperty('--font-scale', '0.95');
        break;
    }
  }, [fontSize]);
  
  const increaseFontSize = () => {
    if (fontSize === 'small') setFontSize('medium');
    else if (fontSize === 'medium') setFontSize('large');
  };
  
  const decreaseFontSize = () => {
    if (fontSize === 'large') setFontSize('medium');
    else if (fontSize === 'medium') setFontSize('small');
  };
  
  const setFontSizePreset = (size) => {
    if (['small', 'medium', 'large'].includes(size)) {
      setFontSize(size);
    }
  };
  
  const value = {
    fontSize,
    setFontSize: setFontSizePreset,
    increaseFontSize,
    decreaseFontSize
  };
  
  return (
    <AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
}; 