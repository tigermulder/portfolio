import React from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import "./footer.css";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="footer">
      <div className="footer_container">
        <h1 className="footer_title">{`</ Park Hyun Sung >`}</h1>

        <ul className="footer_list">
          <li>
            <a href="#about" className="footer_link">{t('footerAbout')}</a>
          </li>

          <li>
            <a href="#portfolio" className="footer_link">{t('footerProject')}</a>
          </li>

          <li>
            <a href="#testimonials" className="footer_link">{t('footerTestimonials')}</a>
          </li>
        </ul>

        <div className="footer_social">
          <a href="https://github.com/tigermulder" className="home_social-icon" target='_blank' rel="noopener noreferrer">
            <i className="uil uil-github-alt"></i>
          </a>
          <a href="https://velog.io/@tiger_front_end/" className="home_social-icon" target='_blank' rel="noopener noreferrer">
            <i className="uil uil-blogger-alt"></i>
          </a>
        </div>

        <span className="footer_copy">&#169; {`</ Park Hyun Sung >`}. {t('footerCopyright')}</span>
      </div>
    </footer>
  )
}

export default Footer
