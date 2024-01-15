import React from 'react'
import "./portfolio.css"

const Portfolio = () => {
  return (
    <section className='portfolio section' id='portfolio'>
      <h2 className="section_title">Portfolio</h2>
      <span className="section_subtitle">My Portfolio</span>

      <div className="portfolio_container container grid">
      <div className="portfolio_content">
          <h3 className="portfolio_title">Redholic WebPage</h3>
          <p className='portfolio_text'>Server-Side Rendering WebPage입니다. SEO를 적용하였고 패럴랙스 효과 및 스크롤 이벤트 처리를 하여서 스크롤에 따라 동적으로 화면요소들을 제어하였습니다. 또한 모바일 및 데스크탑에 따른 레이아웃 조절을하여 데스크탑 및 모바일에서의 화면 높이 등을 고려하여 레이아웃을 동적으로 조절하였습니다.</p>
          <a href="http://www.red-holic.com/" target='_blank' rel="noopener noreferrer" className="portfolio_button">View More
            <i className="uil uil-arrow-right portfolio_button-icon"></i>
          </a>
        </div>
        <div className="portfolio_content">
          <h3 className="portfolio_title">Weather App</h3>
          <p className='portfolio_text'>세계 수도의 날씨를 알려주는 Web App입니다. react.js로 만들었고 Thunder Client를 사용해 openweather Api를 사용해 개발된 REST API 형태에 맞춰서 개발 하였습니다.</p>
          <a href="https://tigermulder.github.io/tigerWeather/" target='_blank' rel="noopener noreferrer" className="portfolio_button">View More
            <i className="uil uil-arrow-right portfolio_button-icon"></i>
          </a>
        </div>
        
      </div>
    </section>
  )
}

export default Portfolio
