import React from 'react'
import "./about.css"
import AboutImg from "../../assets/about.jpg"
import Info from "./info";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section_title">About</h2>
      <span className="section_subtitle">My introduction</span>
      <div className="about_container container grid">
        <img src={AboutImg} alt="" className="about_img" />
        <div className="about_data">
          <Info/>
          <p className="about_description">
          지난 4년 9개월 동안 Web개발 분야에서 다양한 Project를 경험하며 웹 애플리케이션 개발에 대한 이해와 역량을 쌓고있습니다 UI/UX Web Application을 제작하는것을 좋아합니다. 프론트엔드 개발자로서 문제 해결 능력과 partnership 능력을 발휘하여, 팀과 함께 혁신적이고 효율적인 웹 애플리케이션을 개발하는 것을 목표로 삼고 있습니다.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
