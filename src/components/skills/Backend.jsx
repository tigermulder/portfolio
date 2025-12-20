import React from 'react'
import { useLanguage } from '../../contexts/LanguageContext'

const Backend = () => {
  const { t } = useLanguage();
  
  return (
    <div className="skills_content">
      <h3 className="skills_title">{t('backend')}</h3>
      <div className="skills_box">
        <div className="skills_group">
          <div className="skills_data">
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className="skills_name">Node Js</h3>
              <span className="skills_level">basic class</span>
            </div>
          </div>
          <div className="skills_data">
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className="skills_name">EXPRESSE</h3>
              <span className="skills_level">basic class</span>
            </div>
          </div>
        </div>
        <div className="skills_group">
          <div className="skills_data">
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className="skills_name">MySQL</h3>
              <span className="skills_level">basic class</span>
            </div>
          </div>
        </div>
      </div>   
    </div>
  )
}

export default Backend
