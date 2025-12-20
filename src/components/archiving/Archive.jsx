import React from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import "./archive.css"

const Archive = () => {
  const { t } = useLanguage();
  
  return (
    <section className='archive section' id='archive'>
      <h2 className="section_title">{t('archiveTitle')}</h2>
      <span className="section_subtitle">{t('archiveSubtitle')}</span>

      <div className="archive_container container grid">
        <div className="archive_content">
          <div>
            <i className="uil uil-github-alt archive_icon"></i>
            <h3 className="archive_title">{t('github')}</h3>
          </div>
          <p className='archive_text'>{t('githubDesc')}</p>
          <a href="https://github.com/tigermulder" target='_blank' rel="noopener noreferrer" className="archive_button">{t('viewMore')}
            <i className="uil uil-arrow-right archive_button-icon"></i>
          </a>
        </div>
        <div className="archive_content">
          <div>
          <i className="uil uil-blogger-alt archive_icon"></i>
            <h3 className="archive_title">{t('velog')}</h3>
          </div>
          <p className='archive_text'>{t('velogDesc')}</p>
          <a href="https://velog.io/@tiger_front_end" target='_blank' rel="noopener noreferrer" className="archive_button">{t('viewMore')}
            <i className="uil uil-arrow-right archive_button-icon"></i>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Archive
