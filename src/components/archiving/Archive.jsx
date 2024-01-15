import React from 'react'
import "./archive.css"

const Archive = () => {
  return (
    <section className='archive section' id='archive'>
      <h2 className="section_title">Archive</h2>
      <span className="section_subtitle">My archive</span>

      <div className="archive_container container grid">
        <div className="archive_content">
          <div>
            <i className="uil uil-github-alt archive_icon"></i>
            <h3 className="archive_title">GitHub</h3>
          </div>
          <p className='archive_text'>GitHub 개인저장소입니다 알고리즘, 프로젝트등 저의 소스코드가있습니다</p>
          <a href="https://github.com/tigermulder" target='_blank' rel="noopener noreferrer" className="archive_button">View More
            <i className="uil uil-arrow-right archive_button-icon"></i>
          </a>
        </div>
        <div className="archive_content">
          <div>
          <i className="uil uil-blogger-alt archive_icon"></i>
            <h3 className="archive_title">Velog</h3>
          </div>
          <p className='archive_text'>자료구조 및 지식공부후 기록을 남기고있는 Tech blog입니다</p>
          <a href="https://velog.io/@tiger_front_end" target='_blank' rel="noopener noreferrer" className="archive_button">View More
            <i className="uil uil-arrow-right archive_button-icon"></i>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Archive
