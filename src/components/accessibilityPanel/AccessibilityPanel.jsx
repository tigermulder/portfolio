import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useAccessibility } from '../../contexts/AccessibilityContext';
import './accessibilityPanel.css';

const AccessibilityPanel = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const { fontSize, setFontSize } = useAccessibility();

  return (
    <div className="accessibility-panel">
      {/* 폰트 크기 조절 */}
      <div className="accessibility-group">
        <div className="font-size-controls">
          <button 
            className={`font-size-btn ${fontSize === 'small' ? 'active' : ''}`}
            onClick={() => setFontSize('small')}
            title={t('small')}
          >
            A
          </button>
          <button 
            className={`font-size-btn medium ${fontSize === 'medium' ? 'active' : ''}`}
            onClick={() => setFontSize('medium')}
            title={t('medium')}
          >
            A
          </button>
          <button 
            className={`font-size-btn large ${fontSize === 'large' ? 'active' : ''}`}
            onClick={() => setFontSize('large')}
            title={t('large')}
          >
            A
          </button>
        </div>
      </div>

      {/* 언어 토글 */}
      <div className="accessibility-group">
        <button 
          className="language-toggle" 
          onClick={toggleLanguage}
          title={t('language')}
        >
          {language === 'ko' ? 'EN' : '한글'}
        </button>
      </div>
    </div>
  );
};

export default AccessibilityPanel; 