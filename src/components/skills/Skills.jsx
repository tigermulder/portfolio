import React, { memo } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import "./skills.css"
import Frontend from "./Frontend"
import Backend from "./Backend"
import Communication from "./communication"

const Skills = memo(() => {
  const { t } = useLanguage();
  
  return (
    <section className="skills section" id="skills">
      <h2 className="section_title">{t('skillsTitle')}</h2>
      <span className="section_subtitle">{t('skillsSubtitle')}</span>
      <div className="skills_container container grid">
        <Frontend/>
        <Backend/>
        <Communication/>
      </div>
    </section>
  )
});

Skills.displayName = 'Skills';

export default Skills
