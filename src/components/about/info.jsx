import React from 'react'
import { useLanguage } from '../../contexts/LanguageContext'

const Info = () => {
  const { t } = useLanguage();
  
  return (
    <div className="about_info grid">
      <div className="about_box">
        <i className='bx bx-briefcase-alt-2 about_icon'></i>
        <h3 className="about_title">{t('aboutExperience')}</h3>
        <span className="about_subtitle">{t('aboutYears')}</span>
      </div>

      <div className="about_box">
        <i className='bx bx-award about_icon'></i>
        <h3 className="about_title">{t('aboutProjects')}</h3>
        <span className="about_subtitle">{t('aboutProjectsText')}</span>
      </div>
    </div>
  )
}

export default Info
