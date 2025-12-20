import React from 'react'
import { useLanguage } from '../../contexts/LanguageContext'

const Frontend = () => {
  const { t } = useLanguage();
  
  return (
    <div className="skills_content">
      <h3 className="skills_title">{t('frontend')}</h3>
      <div className="skills_box">
        <div className="skills_group">
          <div className="skills_data">
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className="skills_name">JavaScript</h3>
              <span className="skills_level">Middle class</span>
            </div>
          </div>
          <div className="skills_data">
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className="skills_name">TypeScript</h3>
              <span className="skills_level">Middle class</span>
            </div>
          </div>
          <div className="skills_data">
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className="skills_name">HTML5, CSS</h3>
              <span className="skills_level">High class</span>
            </div>
          </div>
        </div>

        <div className="skills_group">
          <div className="skills_data">
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className="skills_name">React</h3>
              <span className="skills_level">Middle class</span>
            </div>
          </div>
          <div className="skills_data">
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className="skills_name">Next.js</h3>
              <span className="skills_level">basic class</span>
            </div>
          </div>
          <div className="skills_data">
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className="skills_name">AJAX</h3>
              <span className="skills_level">Middle class</span>
            </div>
          </div>
        </div>
      </div>   
    </div>
  )
}

export default Frontend
