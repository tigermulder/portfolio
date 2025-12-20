import React, { memo } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import "./portfolio.css"

const Portfolio = memo(() => {
  const { t } = useLanguage();
  
  return (
    <section className='portfolio section' id='portfolio'>
      <h2 className="section_title">{t('portfolioTitle')}</h2>
      <span className="section_subtitle">{t('portfolioSubtitle')}</span>
      <div className="portfolio_container container grid">
        <div className="portfolio_content">
          <h3 className="portfolio_title">review Click service</h3>
          <p className='portfolio_text'>신뢰할 수 있는 사용자 리뷰와 캠페인 참여를 기반으로 한 B2B2C 쇼핑 리워드 플랫폼입니다.
소비자는 검증된 리뷰를 참고해 합리적인 구매를 할 수 있고,
광고주 및 브랜드는 효과적인 상품 홍보와 리워드 기반 캠페인을 손쉽게 운영할 수 있습니다</p>
    <div className="button_container">
    <a href="https://reviewclick-portfolio.vercel.app/" target='_blank' rel="noopener noreferrer" className="portfolio_button">{t('viewMore')}
                <i className="uil uil-arrow-right portfolio_button-icon"></i>
              </a>
              <a href="https://github.com/tigermulder/reviewclick-portfolio" target='_blank' rel="noopener noreferrer" className="portfolio_button">{t('github_')}
                <i className="uil uil-arrow-right portfolio_button-icon"></i>
              </a>
    </div>
              
        </div>
        <div className="portfolio_content">
          <h3 className="portfolio_title">Bank WebApp(1인프로젝트)</h3>
          <p className='portfolio_text'>"Bank WebApp"는 React로 개발된 웹 플랫폼으로, Express사용하여 AWS EC2에 서버를 세팅했고 RDS에 MySQL과 연동했습니다. Client는 계좌를 생성하고, 입금, 출금, 조회 등의 은행 서비스를 이용할 수 있습니다. 프로젝트는 HTTPS를 통한 안전한 통신을 제공하며, AWS를 활용하여 실제 계좌를 발급하고 서비스를 제공할수있습니다. 다 완성되진않았고 리팩토링 중입니다.</p>
          <div className="button_container">
            <a href="https://tiger-bank-app.vercel.app/" target='_blank' rel="noopener noreferrer" className="portfolio_button">{t('viewMore')}
              <i className="uil uil-arrow-right portfolio_button-icon"></i>
            </a>
            <a href="https://github.com/tigermulder/tiger-bank" target='_blank' rel="noopener noreferrer" className="portfolio_button">{t('github_')}
              <i className="uil uil-arrow-right portfolio_button-icon"></i>
            </a>
          </div>
        </div>
        <div className="portfolio_content">
          <h3 className="portfolio_title">Weather App(1인프로젝트)</h3>
          <p className='portfolio_text'>세계 수도의 날씨를 알려주는 Web App입니다. react.js로 만들었고 Thunder Client를 사용해 openweather Api를 사용해 개발된 REST API 형태에 맞춰서 개발 하였습니다.</p>
          <div className="button_container">
            <a href="https://tigermulder.github.io/tigerWeather/" target='_blank' rel="noopener noreferrer" className="portfolio_button">{t('viewMore')}
              <i className="uil uil-arrow-right portfolio_button-icon"></i>
            </a>
            <a href="https://github.com/tigermulder/tigerWeather" target='_blank' rel="noopener noreferrer" className="portfolio_button">{t('github_')}
              <i className="uil uil-arrow-right portfolio_button-icon"></i>
            </a>
          </div>
        </div>
        <div className="portfolio_content">
          <h3 className="portfolio_title">chatting App(1인프로젝트)</h3>
          <p className='portfolio_text'>실시간으로 메세지를 주고받을수있는 채팅앱입니다. react.js로 프론트엔드를 구성하였고 백엔드서버는 express 데이터는 mongoDB로 처리하였습니다. 다 완성되진않았고 리팩토링 중입니다.</p>
          <div className="button_container">
            <a href="https://tigermulder.github.io/tigerWeather/" target='_blank' rel="noopener noreferrer" className="portfolio_button">{t('viewMore')}
              <i className="uil uil-arrow-right portfolio_button-icon"></i>
            </a>
            <a href="https://github.com/tigermulder/eggChatPotato" target='_blank' rel="noopener noreferrer" className="portfolio_button">{t('github_')}
              <i className="uil uil-arrow-right portfolio_button-icon"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
});

Portfolio.displayName = 'Portfolio';

export default Portfolio
