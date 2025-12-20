import React, { memo, useState } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import "./about.css"
import AboutImg from "../../assets/about.jpg"
import Info from "./info";

const About = memo(() => {
  const { t } = useLanguage();
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <section className="about section" id="about">
      <h2 className="section_title">{t('aboutTitle')}</h2>
      <span className="section_subtitle">{t('aboutSubtitle')}</span>
      <div className="about_container container grid">
        <img 
          src={AboutImg} 
          alt="" 
          className={`about_img ${imageLoaded ? 'loaded' : ''}`}
          onLoad={handleImageLoad}
        />
        <div className="about_data">
          <Info/>
          <p className="about_description">
            {t('aboutDescription')}
          </p>
        </div>
      </div>
    </section>
  )
});

About.displayName = 'About';

export default About
