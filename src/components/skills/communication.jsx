import React from 'react'
import { useLanguage } from '../../contexts/LanguageContext'

const Communication = () => {
  const { t } = useLanguage();
  
  return (
    <div className="skills_content">
      <h3 className="skills_title">{t('communication')}</h3>
      <div className="skills_box">
        <div className="skills_group">
          <div className="skills_data">
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className="skills_name">NOTION</h3>
              <span className="skills_level">Basic class</span>
            </div>
          </div>
          <div className="skills_data">
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className="skills_name">GitLab</h3>
              <span className="skills_level">Basic class</span>
            </div>
          </div>
          <div className="skills_data">
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className="skills_name">Github</h3>
              <span className="skills_level">Basic class</span>
            </div>
          </div>
        </div>
        <div className="skills_group">
          <div className="skills_data">
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className="skills_name">JIRA</h3>
              <span className="skills_level">Middle class</span>
            </div>
          </div>
          <div className="skills_data">
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className="skills_name">CONFLUENCE</h3>
              <span className="skills_level">Basic class</span>
            </div>
          </div>
          <div className="skills_data">
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className="skills_name">Bitbucket</h3>
              <span className="skills_level">Basic class</span>
            </div>
          </div>
        </div>
      </div>   
    </div>
  )
}

export default Communication
